const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Bot`,"")
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
client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Premium Bot:heart: جميع الحقوق محفوظة 2017 لــبوت')
      .setFooter('اوامر الادمنيه')
	  .addField('$$bc', `لخاصية البرودكستات`)
      .setFooter('======================================================')
      .setFooter('اوامر الاعضاء')
      .addField('$$invite', `لاضافة البوت الى سيرفرك`)
	  .addField('$$roles', `لمعرفة الرتب الي في السيرفر`)
      .addField('$$avatar', `يجبلك الافتار حقك يعني صورة حسابك`)
      .addField('$$2avatar', `الافتار عن طريق المنشن`)
	  .addField('$$server', `يجبلك معلومات السيرفر`)
	  .addField('$$id', `يجبلك الملف الشخصي حقك`)
	  .addField('$$clear', `البوت يمسح  100 رسايل`)
	  .addField('$$say', `البوت يكرر الكلام الي انت تقوله`)
	  .addField('$$ping', `يقلك كم بنق البوت`)
      .addField('$$support', `سيرفر الدعم`)
      .setFooter('======================================================')
      .setFooter('اوامر تحت الصيانه(يمكنك تجربتها) وشكرا')
      .addField('$$play', `لتسمع الاغنيه`)
      .addField('$$غرد', `للتغريد`)
      .addField('$$embed', `البوت يكرر الكلام الي قلته ب امبد`)
	  .addField('$$cat', `يجبلك صورة بسه`)
  message.author.send({embed});

 }
});

client.login(process.env.BOT_TOKEN);
