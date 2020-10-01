var Docker = require('dockerode');
var os = require('os');
const {spawn,exec} = require('child_process');

module.exports=class DevEnvDocker {
    constructor(SocketPath){
        this.docker = new Docker({socketPath:SocketPath});
        this.DockerDns="ruudud/devdns"
        this.promisifyStream = (stream) => new Promise((resolve, reject) => { 
            stream.on('data', (d) => console.log(d.toString()))
            stream.on('end', resolve)
            stream.on('error', reject)
        })

    }
    init(){console.log(`
    /$$$$$$$                      /$$                           /$$$$$$$                      
   | $$__  $$                    | $$                          | $$__  $$                     
   | $$  \ $$  /$$$$$$   /$$$$$$$| $$   /$$  /$$$$$$   /$$$$$$ | $$  \ $$  /$$$$$$  /$$    /$$
   | $$  | $$ /$$__  $$ /$$_____/| $$  /$$/ /$$__  $$ /$$__  $$| $$  | $$ /$$__  $$|  $$  /$$/
   | $$  | $$| $$  \ $$| $$      | $$$$$$/ | $$$$$$$$| $$  \__/| $$  | $$| $$$$$$$$ \  $$/$$/ 
   | $$  | $$| $$  | $$| $$      | $$_  $$ | $$_____/| $$      | $$  | $$| $$_____/  \  $$$/  
   | $$$$$$$/|  $$$$$$/|  $$$$$$$| $$ \  $$|  $$$$$$$| $$      | $$$$$$$/|  $$$$$$$   \  $/   
   |_______/  \______/  \_______/|__/  \__/ \_______/|__/      |_______/  \_______/    \_/    
                                                                                              
                                                                                              
                                                                                              
   `)}
    pull(ImageName,tag='latest'){
        const promise1 = new Promise((resolve,reject)=>{
            this.docker.pull(`${ImageName}:${tag}`, (err, stream) => {
                this.docker.modem.followProgress(stream, onFinished, onProgress);
        
                function onFinished(err, output) {
                    if (!err) {
                        console.log('\nDone pulling.');
                    } else {
                        console.log(err);
                    }
                    resolve();
                }
                function onProgress(event) {
                }
            });
        })
        return promise1;
    }
    CreateAndStart(ImageName,ContainerName,Port){
        this.docker.container.create({
            Image : ImageName,
            name: String(ContainerName).toLowerCase(),
            Hostname : ContainerName,
            Port : Port
        })
        .then(container=>container.start())
        .catch(error=>console.log(error))
    }
    async StartDnsServer(){
        await this.pull(this.DockerDns).then(()=>{
            this.FindIndexContainerByName("dockerdns").then((value)=>{
                if(value!=-1)
                        return this.StopAndRemoveDnsServer()
                        .then(()=>{
                            this.docker.createContainer({
                                Image : this.DockerDns,
                                name: "dockerdns",
                                HostConfig: {
                                    Binds : ["/var/run/docker.sock:/var/run/docker.sock"],
                                    PortBindings: {
                                        '53/udp': [{
                                            HostPort: '53',
                                        }],
                                    },
                                },
                                Hostname : "DockerDns",

                            })
                        }).then((container)=>{
                                container.start();
                        })
                return this.docker.createContainer({
                    Image : this.DockerDns,
                    name: "dockerdns",
                    HostConfig: {
                        Binds : ["/var/run/docker.sock:/var/run/docker.sock"]
                    },
                    Hostname : "DockerDns",
                    ExposedPorts : {"53/udp":{}}
                }).then((container)=>{
                    container.start();
                })
            })
        })
        
    }
    async LinkDns(IpAddress){
        this.init()
        console.log(`Warning: If you are under wsl env please manualy change the dns server to ${IpAddress}, Your Os is recognise as ${process.platform}.`);
        console.log(`Welcome ${os.userInfo().username}`)
        if(process.platform=="linux"){
            exec(`echo nameserver ${IpAddress} > /etc/resolv.conf`,(error)=>{
                if(error){
                    console.log("You need to try again with Sudo Right")
                    console.log(error)
                }
            })
            exec('/etc/init.d/networking restart',(error)=>{
                if(error) console.log(error)
            })
            exec('ping dockerdns.test',(error)=>{
                if(error) console.log(error)
            })
        }
        else if(process.platform=="darwin"){

        }
        else if(process.platform.includes("win")){
            
        }else{
            console.log("Your opperating system isn't supported yet")
        }
    }
    FindIndexContainerByName(Name){
        return this.docker.listContainers()
            .then((containers)=> containers.findIndex((element => element.Names[0]==`/${Name}`)))
    }
    GetContainerID(Name){
        return this.FindIndexContainerByName(Name)
            .then((Index)=>{
                if(Index==-1) return -1;
                return this.docker.listContainers()
                    .then((Containers)=>Containers[Index].Id)
            })
    }
    StopAndRemoveDnsServer(){
        return this.GetContainerID("dockerdns")
            .then((Id)=>{
                if(Id==-1) return -1;
                var swap=this.docker.getContainer(Id);
                return swap.stop().then(()=>swap.remove()).then(()=>swap)
            })
    }
    StopContainers(Name){
        return this.GetContainerID(Name)
            .then((ID)=>{
                if(ID==-1) return;
                var swap=this.docker.getContainer(ID);
                return swap.stop()
                .then(()=>swap);
            })
    }
    RemoveContainer(Name){
        return this.StopContainers(Name)
            .then((ID)=>{
                if(ID==-1)return;
                var swap=this.docker.getContainer(ID);
                swap.remove()
                return swap;
            })
    }
    GetContainer(Name){
        return this.GetContainerID(Name)
            .then((ID)=>{
                if(ID==-1) return;
                var swap = this.docker.getContainer(ID);
                return swap;
            })
    }
}