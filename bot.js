const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//الاوامر//


client.on("message", message => {
 if (message.content === "$$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
***
ملاحظه
Special orders ان برفكس الاوامر المميزه او

يختلف عن جميع الاوامر 
Special orders برفكس الاوامر المميزه او 
f!!
اما برفكس باقي الاوامر
$$
***
`)


message.author.sendEmbed(embed)

}
}); 
 
 
 
client.on("message", message => {
 if (message.content === "$$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

***__وصف عن البوت__***
**
Fire bot 
متعدد الميزات و الاوامر فيه اوامر جميله يحتوي هذا البوت على
خاصيه قائمه الالوان و تقدر تغير لونك زي برو بوت و مانع الاسبام و الترحيب 
بصوره

سرعه اتصال ممتازه
سهل الاستخدام
صيانه كل يوم
مجاني بل كامل 
بوت عربي وسيتم اضافه اللغه الاجنبيه قريبا
يحتوي على خاصيه الميوزك بجوده عاليه
**

        ***__General orders__***
**
『f!id / معلومات عن حسابك』
『f!draw / يكرر كلامك في صوره』
『f!embed / يكرر كلامك بمبيد』
『f!roles / يعرض لك الرتب و عددها』
『f!rooms / يعرض لك الرومات وعددها』
『f!server / معلومات عن السيرفر』
『f!animal / يعطيك صور حيوانات』
『f!image / يعرض صوره السيرفر』
『f!avatar / يعرض صورتك او صوره شخص』
『f!time / يعرض لك الوقت』
『f!date / يعرض لك التاريخ』
『f!dt / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
**

        ***__Bot orders__***
**
『f!ping / يعرض لك سرعه اتصال البوت』
『f!uptime / يعرض لك صار للبوت كم شغال』
『f!support / سيرفر الدعم القني و المساعده』
『f!invite / اضافه البوت』
『f!members / حاله الاعضاء』
『f!bot / معلومات عن البوت』
**

        ***__Administrative Orders__***
**
『f!kick / كيك』
『f!ban / بان』
『f!mute /ميوت』
『f!unmute /فك الميوت』
『f!mutechannel /قفل الشات』
『f!unmutechannel /فتح الشات』
『f!add.r / اضافه رتبه』
『f!delet / مسح روم』
『f!color 50 /انشاء 50 لون』
『f!color 100/انشاء 100 لون』
『f!color 140/انشاء 140 لوم』
『f!ct /انشاء روم كتابي』4
『f!cv /انشاء روم صوتي』
『f!bc /برودكاست』
**


        ***__Games orders__***
 **       
『f!لعبه صراحه / صراحه』
『f!لعبه مريم / مريم』
『f!لعبه خواطر / خواطر』
『f!يعطيك شعر عن الحب / حب』
『f!يخيرك بين شي وشي / لو خيروك』
『f!يعطيك عقاب و لازم تنفذه / عقاب』
『f!لعبه اسئله / كت تويت』
**
   
        
`)


message.author.sendEmbed(embed)

}
}); 
client.login(process.env.BOT_TOKEN);
