dockerdevcli
============

CLI for Docker dev env

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dockerdevcli.svg)](https://npmjs.org/package/dockerdevcli)
[![Downloads/week](https://img.shields.io/npm/dw/dockerdevcli.svg)](https://npmjs.org/package/dockerdevcli)
[![License](https://img.shields.io/npm/l/dockerdevcli.svg)](https://github.com/batleforc/dockerdevcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dockerdevcli
$ dockerdevcli COMMAND
running command...
$ dockerdevcli (-v|--version|version)
dockerdevcli/0.0.1 win32-x64 node-v12.14.1
$ dockerdevcli --help [COMMAND]
USAGE
  $ dockerdevcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dockerdevcli Init`](#dockerdevcli-init)
* [`dockerdevcli createandstart`](#dockerdevcli-createandstart)
* [`dockerdevcli help [COMMAND]`](#dockerdevcli-help-command)

## `dockerdevcli Init`

Start the DockerEnv (Start Traefik + insert nameserver to your /etc/hosts)

```
USAGE
  $ dockerdevcli Init

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
```

_See code: [src\commands\Init.js](https://github.com/batleforc/dockerdevcli/blob/v0.0.1/src\commands\Init.js)_

## `dockerdevcli createandstart`

Describe the command here

```
USAGE
  $ dockerdevcli createandstart

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src\commands\createandstart.js](https://github.com/batleforc/dockerdevcli/blob/v0.0.1/src\commands\createandstart.js)_

## `dockerdevcli help [COMMAND]`

display help for dockerdevcli

```
USAGE
  $ dockerdevcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src\commands\help.ts)_
<!-- commandsstop -->
