const {Docker} = require('node-docker-api');

const docker = new Docker({socketPath:'/var/run/docker.sock'});
var dockerdnsname="ruudud/devdns" //nom de l'image docker qui link les dns


const promisifyStream = (stream) => new Promise((resolve, reject) => { //pull l'image souhaiter
    stream.on('data', (d) => console.log(d.toString()))
    stream.on('end', resolve)
    stream.on('error', reject)
  })

docker.image.create({}, { fromImage: dockerdnsname, tag: 'latest' })
  .then(stream => promisifyStream(stream))
  .then(() => docker.image.get(dockerdnsname).status())
  .catch(error => console.log(error))

docker.container.create({
    Image : dockerdnsname,
    name: "dockerdns",
    HostConfig: {
        Binds : ["/var/run/docker.sock:/var/run/docker.sock"]
    },
    Hostname : "DockerDns",
    Port : {"50:50/udp": {}}
})
.then(container=>container.start())
.catch(error=>console.log(error))