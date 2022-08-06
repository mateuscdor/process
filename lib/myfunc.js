const { proto, delay, getContentType, downloadContentFromMessage } = require('./@adiwajshing/baileys')
const cheerio = require('cheerio');
const axios = require("axios");
const cfonts = require('cfonts');
const chalk = require('chalk');
const fs = require("fs");
const { exec } = require('child_process');


//    "knights-canvas": "^1.3.7-a",
//    "discord-canvas": "^1.4.1",
//    "canvacord": "^5.3.0",
const colors1 = ["white", "cyan", "red", "green", "blue", "yellow", "magenta"]
const colors2 = ["magenta", "yellow", "blue", "green", "red", "cyan", "white"]
exports.randomColors1 = randomColors1 = colors1[Math.floor(Math.random() * (colors1.length))]
exports.randomColors2 = randomColors2 = colors2[Math.floor(Math.random() * (colors2.length))]

exports.http = async function (query, headers, voltar) {
const made = await axios(query, headers)['catch']((data) => { return query.match(/.jpg|png|jpeg/g) ? { data: fs.readFileSync('./src/404.jpg') } : { data } });
return voltar ? made : made['data'];
};

const resolve = (data, type, x = (type == 'sort' ? null : (Object.values(data || {})[0] || ('./src/404.' + (type == 'img' ? 'jpg' : 'mp4'))))) => {
return (type == 'sort' ? data[Math.floor(Math.random() * data.length)] : (typeof x == 'object' ? x[0]['url'] : x));
};
exports.resolve = resolve;

exports.aleatory = (object) => {
return object[Math.floor(Math.random() * object.length)]
}

const colors = ['white', '#ff00ff', 'cyan', '#adff2f', '#00fa9a', 'black', 'red', '#00ff00', '#1e90ff', 'blue', '#7fffd4', 'yellow', '#7fff00', 'magenta'];
const geter1 = resolve(colors, 'sort');
const geter2 = resolve(colors, 'sort');

exports.banner = cfonts.render(('undefined bot'), {
lineHeight: 1,
font: 'tiny',
align: 'center',
gradient: [geter1, geter2]
});

exports.textF = (text) => {
a = text.toLowerCase()
return a.replace(/á|ã|â|à/g, "a").replace(/é|ê|è/g, "e").replace(/í|î|ì/g, "i").replace(/ó|õ|ô|ò/g, "o").replace(/ú|û|ù/g, "u")
}

exports.serialize = (conn, msg) => {
msg.isGroup = msg.key.remoteJid.endsWith('@g.us');
try {
const berak = Object.keys(msg.message)[0]
msg.type = berak
} catch {
msg.type = null
}
try {
const context = msg.message[msg.type].contextInfo.quotedMessage
if (context["ephemeralMessage"]) {
msg.quotedMsg = context.ephemeralMessage.message
} else {
msg.quotedMsg = context
}
msg.isQuotedMsg = true
msg.quotedMsg.sender = msg.message[msg.type].contextInfo.participant
msg.quotedMsg.fromMe = msg.quotedMsg.sender == conn.user.id.split(':')[0] + '@s.whatsapp.net' ? true : false
msg.quotedMsg.type = Object.keys(msg.quotedMsg)[0]
let ane = msg.quotedMsg
msg.quotedMsg.chats = (ane.type === 'conversation' && ane.conversation) ? ane.conversation : (ane.type == 'imageMessage') && ane.imageMessage.caption ? ane.imageMessage.caption : (ane.type == 'documentMessage') && ane.documentMessage.caption ? ane.documentMessage.caption : (ane.type == 'videoMessage') && ane.videoMessage.caption ? ane.videoMessage.caption : (ane.type == 'extendedTextMessage') && ane.extendedTextMessage.text ? ane.extendedTextMessage.text : (ane.type == 'buttonsMessage') && ane.buttonsMessage.contentText ? ane.buttonsMessage.contentText : ""
msg.quotedMsg.id = msg.message[msg.type].contextInfo.stanzaId
} catch {
msg.quotedMsg = null
msg.isQuotedMsg = false
}

try {
const mention = msg.message[msg.type].contextInfo.mentionedJid
msg.mentioned = mention
} catch {
msg.mentioned = []
}

if (msg.isGroup) {
msg.sender = msg.participant
} else {
msg.sender = msg.key.remoteJid
}
if (msg.key.fromMe) {
msg.sender = conn.user.id.split(':')[0] + '@s.whatsapp.net'
}

msg.from = msg.key.remoteJid
msg.now = msg.messageTimestamp
msg.fromMe = msg.key.fromMe

return msg
}

exports.downloadAndSaveMediaMessage = async (type_file, path_file = "null", m) => {
var download = type_file == 'image' ? (m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage) : type_file == 'video' ? (m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage) : type_file == 'sticker' ? (m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage) : type_file == 'audio' ? (m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage) : false
var stream = await downloadContentFromMessage(download, type_file)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
fs.writeFileSync(path_file, buffer)
return path_file
}

exports.downloadMediaMessage = async (type_file, m) => {
var download = type_file == 'image' ? (m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage) : type_file == 'video' ? (m.message.videoMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage) : type_file == 'sticker' ? (m.message.stickerMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage) : type_file == 'audio' ? (m.message.audioMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage) : false
var stream = await downloadContentFromMessage(download, type_file)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

exports.verify = (find, array) => {
position = false
Object.keys(array).forEach((i) => {
if (array[i] == find) {
position = i
}
})
return position
}

exports.check = (find, array, attr) => {
position = false
Object.keys(array).forEach((i) => {
if (array[i][attr || "id"] == find) {
position = i
}
})
return position
}

exports.position = (find, array, attr) => {
let position = false
Object.keys(array).forEach((i) => {
if ((attr ? array[i]["id"] : array[i]) == find) {
position = i
}
})
return position
}

exports.hex = (number) => {
const token = '1234567890qwertyuiopasdfghjklmnbvcxz1234567890'
let x = ''
for (let i = 0; i < number; i++) {
x += token[Math.floor(Math.random() * token.length)]
}
return x
}

exports.assert = function (data, type, max, end, html, finish) {
var $ = cheerio.load(html)
var h = ""
for (let i = 0; i < max; i++) {
h += (finish ? finish : '') + (type == 'text' ? $(data).eq(i).text() : $(data).eq(i).attr(type)) + end
}
return h
}

exports.sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}

exports.parseMs = (milliseconds) => {
return {
days: Math.trunc(milliseconds / 86400000),
hours: Math.trunc(milliseconds / 3600000) % 24,
minutes: Math.trunc(milliseconds / 60000) % 60,
seconds: Math.trunc(milliseconds / 1000) % 60
}
}

exports.getRandom = getRandom = (ext, abyss = typeof ext == 'object' ? ext : [ext]) => {
var a = [];
for (let r of abyss) {
a.push('·' + Math.floor(Math.random() * 1000000000) + '$' + r);
};
return a.length >= 2 ? a : a[0];
};

exports.getAndSaveMediaMessage = async ({ isQuotedMsg, type, message } = m, option) => {
a = isQuotedMsg ? message.extendedTextMessage?.contextInfo.quotedMessage.type : type;
b = isQuotedMsg ? message.extendedTextMessage?.contextInfo.quotedMessage[a] : message[a];
c = a == 'imageMessage' ? 'image' : (a == 'videoMessage' ? 'video' : (a == 'stickerMessage' ? 'sticker' : 'audio' ));
//a.mimetype == 'image/webp' ? 'sticker' : a.mimetype.split('/')[0];
x = await downloadContentFromMessage(b, c);
y = Buffer.from([]);
for await (const z of x) {
y = Buffer.concat([y, z]);
};
//a.mimetype.match('audio') ? '.mpeg' : '.' + a.mimetype.split('/')[1];
k = getRandom(c == 'image' ? '.png' : (c == 'video' ? '.mp4' : (c == 'sticker' ? '.webp' : '.mpeg' )));
option ? fs.writeFileSync(k, y) : "";
return option ? k : y;
}

exports.getGroupAdmins = function (participants) {
let admins = []
for (let i of participants) {
i.admin !== null ? admins.push(i.id) : ''
}
return admins
}

exports.runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Dia, " : " Dias, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Hora, " : " Horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Minuto, " : " Minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Segundos" : " Segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.live = { key: { "fromMe": false, "participant": '0@s.whatsapp.net' }, message: {  "liveLocationMessage": {  } } }

exports.verificado = (text) => { return { key : { participant : '0@s.whatsapp.net' },  message: { extendedTextMessage: { "text": text ? text: " ", "previewType": "NONE" } } } }

exports.mention = (groupMembers) => {
asxz = []
for (let i of groupMembers) {
asxz.push(i.id)
}
return asxz
}

const users = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36 Edg/100.0.1185.29","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36","Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.55","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.83 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/602.1 (KHTML, like Gecko) splash Version/10.0 Safari/602.1","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.60 Safari/537.36","Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36","Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36","Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/100.0.4896.85 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPad; CPU OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/100.0.4896.85 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/100.0.4896.77 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPad; CPU OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/100.0.4896.85 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/100.0.4896.85 Mobile/15E148 Safari/604.1","Mozilla/5.0 (Linux; Android 11; SM-M315F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.87 Mobile Safari/537.36","Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1","Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1","Mozilla/5.0 (Linux; U; Android 9; zh-CN; V1901A Build/P00610) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/78.0.3904.108 Quark/5.4.9.201 Mobile Safari/537.36","Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1"]
exports.agent = () => {
return users[Math.floor(Math.random() * users.length)]
}

exports.convert = (url, entry, exit) => {
return new Promise((resolve, reject) => {
exec(`wget ${url} -O ${entry} && ffmpeg -i ${entry} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${exit}`, async (err) => {
if (err) {
resolve(fs.readFileSync('./src/404.mp4'));
}
resolve(fs.readFileSync(exit));
});
});
};