var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});

var DevEnvDocker = require('./ModuleInterface');

var Dev= new DevEnvDocker('/var/run/docker.sock','loc');
//Dev.StartDnsServer()
Dev.LinkDns("172.17.0.3")