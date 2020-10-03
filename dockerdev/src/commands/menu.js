module.exports = {
    name:'menu',
    alias:"menu",
    description:"Welcome to DockerDev env",
    hidden:true,
    byeMessage:"Thanks for using DockerDev",
    run: async (tooldbox) =>{
        await tooldbox.menu.showMenu();
    }
}