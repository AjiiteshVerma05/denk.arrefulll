const mySecret = process.env['TOKEN']
const { Client } = require('discord.js');
const client = new Client();
const { token } = require('./config/bot.json')
const { keep_alive } = require("./keep_alive");

require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})


client.login(process.env.TOKEN);
client.on("message", async message =>{
  if (message.content.startsWith("Hi"))
  {
    message.channel.send(`sup`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hru"))
  {
    message.channel.send(`im fine, you?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("goodwork"))
  {
    message.channel.send(`i dont need any appreciation.`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("lmao"))
  {
    message.channel.send(`Huh? what so funny?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("bruh"))
  {
    message.channel.send(`BIG BRUH MOMENTO`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("im sad"))
  {
    message.channel.send(`WHY?! UR SUCH AN AMAZING PERSON!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("tag"))
  {
    message.channel.send(`! "𝗜𝘁𝘇 {username}ᴼᶠᶠᶦᶜᶦᵃˡ`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("nothing"))
  {
    message.channel.send(`sus`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hi"))
  {
    message.channel.send(`Hemlo`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("whats your name?"))
  {
    message.channel.send(`whats my name? i am mod :D`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("invite"))
  {
    message.channel.send(`Wanna invite me ? here's the link https://discord.com/oauth2/authorize?client_id=831518834312871956&scope=bot&permissions=8`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("haha"))
  {
    message.channel.send(`Lom`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre chad"))
  {
    message.channel.send(`thanks`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre-bot why are you gae?"))
  {
    message.channel.send(`dont get ur hopes up man`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre wanna go party tonight?"))
  {
    message.channel.send(`PARTYYYYYYY LESH GOOO!`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre fuck off!"))
  {
    message.channel.send(`Your absence is required`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("hello arre"))
  {
    message.channel.send(`नमस्कार🙏`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("Jai Shree Ram!"))
  {
    message.channel.send(`जय श्री राम 🕉️`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre do you know shib?"))
  {
    message.channel.send(`haa vahi jo raat me incogo par schumacher ki races dekhta hai.......?`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre do you know shubh?"))
  {
    message.channel.send(`his name is bubh u mf`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre do you know aryaman?"))
  {
    message.channel.send(`ha vahi na jo gaming channel bol kr f1 banata hai...`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre do you know arre?"))
  {
    message.channel.send(`arre`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("arre do you know tejas?"))
  {
    message.channel.send(`banglore chala gaya bsdka`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("turn"))
  {
    message.channel.send(`left go right and then kindly fuck off`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("koach"))
  {
    message.channel.send(`i prefer mrf zlx for sheer comfort and long performance`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("goodbye"))
  {
    message.channel.send(`i dont know why you say goodbye i say hello.`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("mum n csk auction list"))
  {
    message.channel.send(`Anil Choudhary sold to mum and csk for 800crs.`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("Who can save sl?"))
  {
    message.channel.send(`Kumar Dharmasena`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("yo arre"))
  {
    message.channel.send(`yo`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("who is denk.arre?"))
  {
    message.channel.send(`ur dad`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("Who can save sl?"))
  {
    message.channel.send(`Kumar Dharmasena`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("rohit sharma"))
  {
    message.channel.send(`yo he just messaged me "kisne vada pav liya mc"`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("who is justin bieber"))
  {
    message.channel.send(`canadian girl who cant sing.`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("which is the best f1 team"))
  {
    message.channel.send(`bro,i am out of here i dont want 100s of msgs in dis channel.`)
  }
});
client.on("message", async message =>{
  if (message.content.startsWith("ok bro i understand"))
  {
    message.channel.send(`thanks bro`)
  }
});







