var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});

var DevEnvDocker = require('./ModuleInterface');

var Dev= new DevEnvDocker('/var/run/docker.sock');

var test =async ()=>{
    await Dev.StartPortainer();
}
test()
//Dev.StartDnsServer()
//Dev.LinkDns("172.17.0.3")
//Dev.docker.getNetwork('c90446f40debcc6b9551936e1148b1afdea6d0f2b2982e550c456a819c795af6').inspect().then(console.log)