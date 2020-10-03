const {Command, flags} = require('@oclif/command')
var DevEnvDocker = require('../lib/ModuleInterface');



class HelloCommand extends Command {
  async run() {
    const {flags} = this.parse(HelloCommand)
    
  }
}

HelloCommand.description = `Describe the command here
...
Extra documentation goes here
`

HelloCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),r
}

module.exports = HelloCommand
