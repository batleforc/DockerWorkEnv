const {Command, flags} = require('@oclif/command')
var DevEnvDocker = require('../lib/ModuleInterface');



class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    
  }
}

HelloCommand.description = `Start the DockerEnv (Start Traefik + insert nameserver to your /etc/hosts)
...
`

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = HelloCommand
