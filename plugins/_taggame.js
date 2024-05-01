let h = new Map()

let members = new Array()

export async function before(m, { conn }) {
  if (m.text === "ابدا" && !m.fromMe && !h.get(m?.key.remoteJid) && m.isGroup) {
    await conn.groupSettingUpdate(m.key.remoteJid, 'not_announcement');
    h?.set(m.key.remoteJid, {
      id: true,
      tid: m.key.remoteJid,
      time: Date.now()
    });
    setTimeout(async () => {
      const g = h.get(m.key.remoteJid);
      await conn.groupSettingUpdate(g.tid, 'announcement');
      await conn?.groupParticipantsUpdate(
        g.tid,
        [members[members.length - 1]],
        "remove"
      );
      h?.delete(m.key.remoteJid);
    }, 20000);
  }
  const g = h?.get(m.key.remoteJid);
  if (g?.id === true && !m.fromMe && g.tid === m.key.remoteJid) {
if(m?.mentionedJid[0]) members?.push(m?.mentionedJid[0]);
  }
}
