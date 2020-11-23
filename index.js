const Discord = require("discord.js");

const client = new Discord.Client;

const prefix = "!";

client.on("ready", () => {
    console.log("Bot ON");
});

client.on("guildMemberAdd", member => {
    console.log("Un nouveau pelo");
    member.guild.channels.cache.find(channel => channel.id === "435549024687357962").send("Unv ouveau Singe entre dans le Zoo !! !\nNous sommes désormais **" + member.guild.memberCount + "** dans le Zoo!!");
    member.roles.add("435552439597400065");
});
    
client.on("message", message =>{
    if(message.author.bot) return;
//=============================Reponse au Rôle Dog======================>
    if(message.member.roles.cache.find(r => r.name === "Dog")){
        message.reply({embed: 
            {color: 3447003,
            description: "SALE CHIEN",
            "image": {url:"https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"}
        }});  
    }
//===============================ADMIN PERM=================================>
    if(message.member.hasPermission("ADMINISTRATOR")){

        if(message.content.startsWith(prefix + "dog")){
            let mention = message.mentions.members.first();
            mention.roles.add("780142415914467329");
            mention.voice.setChannel("780142696429518898")
        }
//================================MOVE TO AUTHOR=================================>
        if(message.content.startsWith(prefix + "aupied")){
            let author = message.member;
            let mention = message.mentions.members.first();
            mention.voice.setChannel(author.voice.channelID);     
        }
//==============================GIF DE DOG=================================>
        if(message.content.startsWith(prefix + "kawai")){
            message.reply({embed: 
                {color: 3447003,
                description: "BARK BARK",
                "image": {url:"https://media.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif"}
            }});     
        }
    }
//==========================NON ADMIN=======================================>    
    if(message.content.startsWith(prefix + "meute")){
            message.channel.send('<@310088962595225610> <@434488582422528010> <@131413017827999744> <@239855037902225409> <@310086739060326401> BARK??');     
        }
});

client.login("NzgwMTI0OTQ0Nzk3MjcwMDM2.X7qh-A.h-PvTCskdzWnZPdKkbHQHK18A24");