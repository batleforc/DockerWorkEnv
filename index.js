var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});

var DevEnvDocker = require('./ModuleInterface');

var Dev= new DevEnvDocker('/var/run/docker.sock');

Dev.StartDnsServer()
.then(()=>setTimeout(()=>{
    Dev.RemoveContainer('dockerdns')
},100))

return;
Dev.StopDnsServer();
Dev.FindIndexContainerByName('dockerdns')
    .then((test)=>console.log(test))

