var DevEnvDocker = require('../../lib/ModuleInterface');


module.exports = {
    name:'Portainer',
    alias:'InitP',
    hidden:true,
    run: async (toolbox)=>{
        var Dev= new DevEnvDocker('/var/run/docker.sock');
        await Dev.StartPortainer();
    }
}