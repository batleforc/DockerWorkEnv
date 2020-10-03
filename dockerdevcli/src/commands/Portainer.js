const {Command, flags} = require('@oclif/command')
var DevEnvDocker = require('../lib/ModuleInterface');

class PortainerCommand extends Command {
  async run() {
    const {flags} = this.parse(PortainerCommand)
    var Dev= new DevEnvDocker('/var/run/docker.sock');
    await Dev.init();

  }
}

PortainerCommand.description = `Describe the command here
...
Extra documentation goes here
`

PortainerCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = PortainerCommand
