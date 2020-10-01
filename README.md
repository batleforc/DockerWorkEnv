# DockerWorkEnv
[URL UML ](http://www.plantuml.com/plantuml/uml/5SnH2e90403GVqzH5t2X126854maYmeB_LtNASLrHcPdg-DN_u-NED4iVhB1Sa1ZVGUUxQ8NcTr6ATRly3b8xrllW0sX04feQ5Aj5WiFOgCoCYDmJJpkyQKcxGHOpLRZVmtb8pkX4N2Rvj4vhz9oVRmsgpekgiCzAsvbV6cYKnqaWDtFVm40)
![PlantUML model](http://www.plantuml.com/plantuml/png/5SnH2e90403GVqzH5t2X126854maYmeB_LtNASLrHcPdg-DN_u-NED4iVhB1Sa1ZVGUUxQ8NcTr6ATRly3b8xrllW0sX04feQ5Aj5WiFOgCoCYDmJJpkyQKcxGHOpLRZVmtb8pkX4N2Rvj4vhz9oVRmsgpekgiCzAsvbV6cYKnqaWDtFVm40)

## Fonctionnement

Index.js (Nom provisoir) Pull l'image *"ruudud/devdns"* qui sert de serveur DNS local.
Ce serveur Dns local (quand il ne peux pas répondre) fait tomber les entrer sur celle correspondant avec le DNS *8.8.8.8* (Dns de Google).
Puis il Start le container baser sur l'image *"ruudud/devdns"*.
Le container est relier aux docker.sock de la machine Hôte et scan les container en les reliant aux hostname corespondant.


Nodejs Access Docker : https://github.com/apocas/dockerode

Container local dns : https://github.com/ruudud/devdns

Change Dns Mac : https://osxdaily.com/2015/06/02/change-dns-command-line-mac-os-x/

Change Dns Windows : https://tweaks.com/windows/40339/configure-ip-address-and-dns-from-command-line/

Change Dns Linux : https://support.strongvpn.com/hc/en-us/articles/360038982774-How-to-Change-DNS-in-Linux

Nodejs Exec cmd : https://nodejs.org/api/child_process.html

Nodejs know Current Os : https://stackoverflow.com/questions/8683895/how-do-i-determine-the-current-operating-system-with-node-js


