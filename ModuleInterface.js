var Docker = require('dockerode');
const { default: container } = require('node-docker-api/lib/container');

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
    pull(ImageName,tag='latest'){
        return this.docker.pull(`${ImageName}:${tag}`)
            .then((err,stream)=>{
                console.log(stream);
                return;
            })
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
    StartDnsServer(){

        return this.pull(this.DockerDns)
            .then(()=>this.FindIndexContainerByName("dockerdns").then((value)=>{
                setTimeout(()=>{
                if(value!=-1)
                    
                        return this.StopAndRemoveDnsServer()
                        .then(()=>{
                            this.docker.createContainer({
                                Image : this.DockerDns,
                                name: "dockerdns",
                                HostConfig: {
                                    Binds : ["/var/run/docker.sock:/var/run/docker.sock"]
                                },
                                Hostname : "DockerDns",
                                Port : {"50:50/udp": {}}
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
                    Port : {"50:50/udp": {}}
                }).then((container)=>{
                    container.start();
                    
                })
            },100)
            }))
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
}