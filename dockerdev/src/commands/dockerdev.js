const command = {
  name: 'dockerdev',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to DockerDev CLI')
  }
}

module.exports = command
