const {Command,} = require('@oclif/command')
var DevEnvDocker = require('../lib/ModuleInterface');

class PortainerCommand extends Command {
  async run() {
    var Dev= new DevEnvDocker('/var/run/docker.sock');
    Dev.StartPortainer();

  }
}

PortainerCommand.description = `Start Portainer container
...
Extra documentation goes here
`

module.exports = PortainerCommand
