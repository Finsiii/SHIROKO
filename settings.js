//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +6285752535878
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "GAADA YT" //ur yt chanel name
global.socialm = "https://github.com/Finsiii" //ur github or insta name
global.location = "japanese" //ur location

global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autorecord = true
global.autoswview = false //auto status/story view
global.autoread = false
global.adminevent = true //show promote/demote message
global.groupevent = false //show update messages in group chat

//new
global.botname = 'Finsii-Bot' //ur bot name
global.ownernumber = ['6288973380122'] //ur owner number, dont add more than one
global.ownername = 'Finsii Ahay' //ur owner name
global.websitex = ""
global.wagc = "https://chat.whatsapp.com/GLKes0Ig39kHJrx34Mecwl"
global.saluran = "https://chat.whatsapp.com/GLKes0Ig39kHJrx34Mecwl"
global.jidgroupnotif = 'https://chat.whatsapp.com/GLKes0Ig39kHJrx34Mecwl'
global.jidgroup = 'https://chat.whatsapp.com/GLKes0Ig39kHJrx34Mecwl'
global.jidch = 'https://chat.whatsapp.com/GLKes0Ig39kHJrx34Mecwl'
global.themeemoji = '🪀'
global.wm = "Finsii-Bot"
global.botscript = '' //script link
global.packname = "Finsii-Bot"
global.author = "By Finsii Ahay"
global.creator = "628973380122@s.whatsapp.net"
global.xprefix = '.'
global.tiktokname = '@Finsiii' //name tiktok owner
global.tiktokname2 = '@unknow' //name tiktok2 owner
global.tiktokname3 = '@unknow' //name tiktok3 owner
global.linkch = "https://chat.whatsapp.com/GLKes0Ig39kHJrx34Mecwl"
global.linkgc = "https://chat.whatsapp.com/GLKes0Ig39kHJrx34Mecwl"
global.linksosmed = "https://www.instagram.com/alfinoraditya_"
global.version = "v1.0"

global.premium = ["6288973380122"] // Premium User
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo
global.sessionName = 'Shiroko-Sesi'

//bot sett
global.typemenu = 'v1' // menu type 'v1' => 'v2'
global.typereply = 'v6' // reply type 'v1' => 'v4'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.ftyuta = [
"https://raw.githubusercontent.com/Finsiii/foto-aja/refs/heads/main/screenshot_12102024_133425.jpg",
]

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 20,
	premium: 0,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: '*[ ᴇʀʀʀᴏʀ ]* Error',
	nsfw: '*[ ɴsғᴡ ]* Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done',
	loading: '*[ ʟᴏᴀᴅɪɴɢ ]* Please Wait....'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});