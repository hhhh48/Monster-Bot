const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Bot`,"$$help")
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
 const minecraft = [
     'MINECRAFT | اي سنة تم انشاء ماين كرافت لأجهزة ال كمبيوتر ؟ ',
     'MINECRAFT | هل انت جيد في القتال ل 1.8 ام لا ؟ ',
     'MINECRAFT | ما هو الشيئ الاكثر ندرة في ماين كرافت   ؟',
     'MINECRAFT | كم سنة صرلك تلعب ماين كرافت ؟',
     'MINECRAFT | هل انت خبير في البناء والريدستون ام لا ؟',
     'MINECRAFT | ما هو اكثر اصدار تفضله في ال ؟ pvp  ',
     'MINECRAFT | من افضل لاعب برأيك ؟ pvp ل 1.8 و 1.9    ',
     'MINECRAFT | ما تفضل اكثر كيوب كرافت ام هايبكسل ؟',
     'MINECRAFT | هل انت في سيرفر الان ام لا ؟  ',
     'MINECRAFT | لو خيروك بين جميع مودات ماين كرافت ف ماذا ستختار  ؟',
     'MINECRAFT | اين يوجد السلايم ؟',
     'MINECRAFT | وين تلقى البسة ؟ ',
     'MINECRAFT | ما هي التطويرة التي تجعل السيف يحرق ؟ ',
     'MINECRAFT | كم خانة يملأ لك لحم البقر ؟ ',
     'MINECRAFT | ما هو الشئ الذي يخفف الضرر عند القفز من مسافة عالية ؟',
     'MINECRAFT | ما هي التطويرة التي تجعل القوس يزيد الضرر ؟',
     'MINECRAFT | اين يرسبن الوحش الجديد (الفانتوم) في ماين كرافت ؟',
     'MINECRAFT | كيف يمكن ان تأخذ بيضة التنين بعد قتله ؟',
     'MINECRAFT | ما هو اقوى وحش في اللعبة ؟',
     'MINECRAFT | ما هو افضل ارتفاع للدايموند  ؟',
     'MINECRAFT | كم قلب للبقرة ؟',
     'MINECRAFT | مين الوحش الي لما يطيح من مكان عالي ما يموت ؟',
     'MINECRAFT | ايرون قولم كم قلب له ؟',
     'MINECRAFT | ما هو اكثر شي تكرهه في اللعبة ؟',
     'MINECRAFT | ما هو اكثر شئ تحبه بلعبه ؟',
     'MINECRAFT | من الحيوان الي لما يطيح ما يموت ؟',
     'MINECRAFT | كيف تجيب رأسك في ماين كرافت بدون استخدام قيم مود او غش ؟  ',
     'MINECRAFT | هل ماين كرافت هي افضل لعبة عندك, و لماذا ؟',
     'MINECRAFT | مين الحيوان الي لما يطيح ما يموت ؟',
     'MINECRAFT | كم تقيم نفسك من عشرة  ؟ ',
     'MINECRAFT | اذا كنت تلعب هايبكسل فما عدد كلاتك في سكاي وارز ؟',
     'MINECRAFT | هل عندك حساب ماين كرافت اصلي وانت شاريه ؟',
     'MINECRAFT | ما هي افضل لعبة لك في هايبكسل ؟',
     'MINECRAFT | هل تعلم من اخترع اللعبه ؟',
     'MINECRAFT | انت كنت تلعب 1.8  وتستخدم الجتر ف كم سبس تستخدم في اللعب ؟',
     'MINECRAFT | اذا خيرت انا تختار شئ واحد ل اضافته في اللعبة ف ماذا ستختار ؟',
     'MINECRAFT | ما هي التطويرة التي تجعل الحذاء يمشي بسرعة في الماء ؟',
     'MINECRAFT |متى تفقس بيضات السلحفاة في ماين كرافت  ؟',
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('$$minecraft')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله ماين كرافت")
  .setColor('Random')
  .setDescription(`${minecraft[Math.floor(Math.random() * minecraft.length)]}`)
  .setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8YIz4nsQ9y416Gq4FI2AUvaT2BWoPX0U6azUAtmR9QLaC59rHQ")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   
 }
});
client.login(process.env.BOT_TOKEN);
