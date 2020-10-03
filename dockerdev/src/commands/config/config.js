module.exports ={
    name:'initialisation',
    alias:["init"],
    description:"Init the project (Start Traefik and add entries to the host files",
    hidden:true,
    showHelp:false,
    run: async(toolbox)=>{
        await toolbox.menu.showMenu('Config')
    }
}