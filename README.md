# DockerWorkEnv
[URL UML ](http://www.plantuml.com/plantuml/uml/5SnH2e90403GVqzH5t2X126854maYmeB_LtNASLrHcPdg-DN_u-NED4iVhB1Sa1ZVGUUxQ8NcTr6ATRly3b8xrllW0sX04feQ5Aj5WiFOgCoCYDmJJpkyQKcxGHOpLRZVmtb8pkX4N2Rvj4vhz9oVRmsgpekgiCzAsvbV6cYKnqaWDtFVm40)
![PlantUML model](http://www.plantuml.com/plantuml/png/5SnH2e90403GVqzH5t2X126854maYmeB_LtNASLrHcPdg-DN_u-NED4iVhB1Sa1ZVGUUxQ8NcTr6ATRly3b8xrllW0sX04feQ5Aj5WiFOgCoCYDmJJpkyQKcxGHOpLRZVmtb8pkX4N2Rvj4vhz9oVRmsgpekgiCzAsvbV6cYKnqaWDtFVm40)

## Fonctionnement

Index.js (Nom provisoir) Pull l'image *"ruudud/devdns"* qui sert de serveur DNS local.
Ce serveur Dns local (quand il ne peux pas répondre) fait tomber les entrer sur celle correspondant avec le DNS *8.8.8.8* (Dns de Google).
Puis il Start le container baser sur l'image *"ruudud/devdns"*.
Le container est relier aux docker.sock de la machine Hôte et scan les container en les reliant aux hostname corespondant.


https://github.com/apocas/dockerode

https://github.com/ruudud/devdns