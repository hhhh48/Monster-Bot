$$const Discord = require("discord.js");
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
『$$id / معلومات عن حسابك』
『$$draw / يكرر كلامك في صوره』
『$$embed / يكرر كلامك بمبيد』
『$$roles / يعرض لك الرتب و عددها』
『$$rooms / يعرض لك الرومات وعددها』
『$$server / معلومات عن السيرفر』
『$$animal / يعطيك صور حيوانات』
『$$image / يعرض صوره السيرفر』
『$$avatar / يعرض صورتك او صوره شخص』
『$$time / يعرض لك الوقت』
『$$date / يعرض لك التاريخ』
『$$dt / يعرض الوقت في الامارات و مكه المكرمه و مصر و التاريخ』
**

        ***__Bot orders__***
**
『$$ping / يعرض لك سرعه اتصال البوت』
『$$uptime / يعرض لك صار للبوت كم شغال』
『$$support / سيرفر الدعم القني و المساعده』
『$$invite / اضافه البوت』
『$$members / حاله الاعضاء』
『$$bot / معلومات عن البوت』
**

        ***__Administrative Orders__***
**
『$$kick / كيك』
『$$ban / بان』
『$$mute /ميوت』
『$$unmute /فك الميوت』
『$$mutechannel /قفل الشات』
『$$unmutechannel /فتح الشات』
『$$add.r / اضافه رتبه』
『$$delet / مسح روم』
『$$color 50 /انشاء 50 لون』
『$$color 100/انشاء 100 لون』
『$$color 140/انشاء 140 لوم』
『$$ct /انشاء روم كتابي』4
『$$cv /انشاء روم صوتي』
『$$bc /برودكاست』
**


        ***__Games orders__***
 **       
『$$لعبه صراحه / صراحه』
『$$لعبه مريم / مريم$$』
『$$لعبه خواطر / خواطر』
『$$يعطيك شعر عن الحب / حب』
『$$يخيرك بين شي وشي / لو خيروك』
『$$يعطيك عقاب و لازم تنفذه / عقاب』
『$$لعبه اسئله / كت تويت』
**
   
        
`)


message.author.sendEmbed(embed)

}
}); 
client.login(process.env.BOT_TOKEN);
