# DockerWorkEnv

@startuml
node "Utilisateur" as user
node "Interface" as Int
cloud docker {
node "DockerDns" as dckdns
node "DockerPhP:apache Nex-Monsite.loc" as dckphp
node "Docker:WordPress Wp.loc" as dckwp
node "Docker:NodeJS node.loc" as dcknodejs
}
user --> dckdns : Résout les nom de domaine
dckdns <-- dckphp : Contient une entrer pour le relier a Nex-Monisite.loc
dckdns <-- dckwp : Contient une entrer pour le relier a Wp.loc
dckdns <-- dcknodejs : Contient une entrer pour le relier a node.loc
user --> dckphp
user --> dckwp : Accéde aux nom de domaine via le dns DockerDns
user --> dcknodejs
user --> Int : Uttilise
Int --> dckdns : Crée le container
Int --> dckphp : Crée le container
Int --> dckwp : Crée le container
Int --> dcknodejs : Crée le container
@enduml