const { Jsl } = require("../lib/");
const Config = require('../config');
const { ALIVE_INFO } = require('../config');


Jsl(
  {
    pattern: "alive ?(.*)",
    fromMe: true,
    desc: "Send Bot Alive",
    type: "misc",
  },
  async (message, match) => {
  const templateButtons = [
  {index: 1, urlButton: {displayText: 'â­ GitHub!', url: 'https://github.com/Afx-Abu/Abu-MD'}},
  {index: 2, callButton: {displayText: 'Contact!', phoneNumber: 'Wa.me/917025994178'}},
  {index: 3, quickReplyButton: {displayText: 'ð¼ð´ð½ð!', id: ',menu'}},
  {index: 4, quickReplyButton: {displayText: 'ð¿ð¸ð½ð¶!', id: ',ping'}},
]
      
    const templateMessage = {
        text: '      \nâââââââââââââââââââ        \nââââââââââââââ¦ââââ¦â        \nââ â£âââââââââââââââ©â        \nâââââââââââââââââââ \n\n *ââ ððð ððððð ððððð ððð*Â»\n*ââBá´á´ É´á´á´á´ :*á´Êá´ á´á´\n*ââ Oá´¡É´á´Ê : á´sÊ*\n*ââWá´Êá´ á´Êá´á´ : *á´á´ÊÊÉªá´\n*ââ PÊá´ÒÉªx : ' + Config.HANDLERS + '*    \n *ââ*\n           *ððð ðð ðð ððð*         \n\n*â­âª á´á´á´á´á´á´ ÊÊ á´sÊ*\n*â°ââââââââââââââââââÛªÛªà½´à½»â¸*\n',          
        footer: `${ALIVE_INFO.split(";")[0]}`,
        templateButtons: templateButtons,
        headerType: 5
      }
    
    await message.client.sendMessage(message.jid, templateButtons)
  }
);

Jsl(
  {
    pattern: "ping ?(.*)",
    fromMe: true,
    desc: "Send Bot Ping",
    type: "misc",
  },
  async (message, match) => {
  const start = new Date().getTime();
    const end = new Date().getTime();
    const buttons = [
      {buttonId: ',menu', buttonText: {displayText: 'ðððð'}},
      {buttonId: ',ping', buttonText: {displayText: 'ðððð'}}
    ]
    
    const buttonMessage = {
        text: 'ðððððððð ðð ' + (end - start) + ' _ðð_',
        footer: 'ððð ðððð',
        buttons: buttons,
        headerType: 1
    }
    
    await message.client.sendMessage(message.jid, buttonMessage)
  }
);


