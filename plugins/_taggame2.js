let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let optionsFull = `
〄│ فــعــالــيــة الـمــنـشـن
〄│ لتشغيل الفعالية اكتب .فعالية المنشن
> لـلـبـدا اكــتـب ابــدا
`.trim()

let isEnable = /شغل|فعالية|(فعالية)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'منشن':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.taggame = isEnable
break
case 'المنشن':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, { text: optionsFull }, { quoted: m })
throw false
}
conn.sendMessage(m.chat, { text: `〄│ فــعــالــيــة الـمــنـشـن
〄│ تــم تــفـعــيــل الـامـر بـنـجـاح
> لـلـبـدا اكــتـب ابــدا` }, { quoted: m })        
}
handler.help = ['Shadow'].map(v => v + 'Mention Game')
handler.tags = ['Shadow']
handler.command = /^((افتح|اقفل)|(فعالية|اقفل)|(فعالية)?[01])$/i

export default handler
