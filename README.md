# DockerWorkEnv
[URL UML ](http://www.plantuml.com/plantuml/uml/5Sn1he8m403GFQVu_m9qOoGnCM8Kq8MQs2Z1NIcZ4DePCfsgnrVtBoyFObYYTyd_WDR53YAxlrva2WkbsBpIno1zR6C0jeG2AAabhreZ3kx4Lct9Zi0ryLZWKtaJ15XDpk1lJUKjAw4HSBakPwTILqrzAPhZRNFUwRqkvphJsRKw93bWz_KV)
![PlantUML model](http://www.plantuml.com/plantuml/png/5Sn1he8m403GFQVu_m9qOoGnCM8Kq8MQs2Z1NIcZ4DePCfsgnrVtBoyFObYYTyd_WDR53YAxlrva2WkbsBpIno1zR6C0jeG2AAabhreZ3kx4Lct9Zi0ryLZWKtaJ15XDpk1lJUKjAw4HSBakPwTILqrzAPhZRNFUwRqkvphJsRKw93bWz_KV)

## Fonctionnement

Index.js (Nom provisoir) Pull l'image *"ruudud/devdns"* qui sert de serveur DNS local.
Ce serveur Dns local (quand il ne peux pas répondre) fait tomber les entrer sur celle correspondant avec le DNS *8.8.8.8* (Dns de Google).
Puis il Start le container baser sur l'image *"ruudud/devdns"*.
Le container est relier aux docker.sock de la machine Hôte et scan les container en les reliant aux hostname corespondant.


Nodejs Access Docker : https://github.com/apocas/dockerode

Container local dns : https://github.com/ruudud/devdns

Change Dns Mac : https://osxdaily.com/2015/06/02/change-dns-command-line-mac-os-x/

Change Dns Windows : https://tweaks.com/windows/40339/configure-ip-address-and-dns-from-command-line/

127.0.0.1 *.localhost in c:\windows\System32\drivers\etc\hosts + traefic

Change Dns Linux : https://support.strongvpn.com/hc/en-us/articles/360038982774-How-to-Change-DNS-in-Linux

Nodejs Exec cmd : https://nodejs.org/api/child_process.html

Nodejs know Current Os : https://stackoverflow.com/questions/8683895/how-do-i-determine-the-current-operating-system-with-node-js

Voir pour uttiliser GULP

https://github.com/infinitered/gluegun/tree/master/docs

https://github.com/lenneTech/cli-starter

https://github.com/lenneTech/gluegun-menu

https://infinitered.github.io/gluegun/#/?id=quick-start

cd dockerdev
npm link
dockerdev
