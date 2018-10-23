const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$$Help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix $$ "help") {


 message.author.sendMessage(`
 

 ╱╭╮╭╮╱╱╱╱╭╮╭━╮╱╱╱╱╱╱╭━━╮╱╱╱
♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ ♕ 
اوامر البوت
❖اوامر عامه

❖!link  لاخذ رابط اي بوت 
❖!رابط لاخذ رابط السيرفر
❖!invites لمعرفة كم دعوت شخص
❖ !server  لمعرفت معلومات السيرفر
❖!bans  يعطيك تاقات الي تبندو ورا بعض 
❖!owner لترسل رسالة لصاحب البوت
❖!مسح لمسح الشات 
❖!اقتراح وكتب اقتراحك وسوف يصل الاداره
❖!move لسحب جميع الاعضاء الذين في الرومات لعندك
❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖❖
❖اوامر العاب 
❖!زواج لعبة زواج
❖!ابلع  لعبة حلوه

    }
});
client.login(process.env.BOT_TOKEN);
