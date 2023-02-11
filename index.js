const qrcode = require('qrcode-terminal');
const chalk = require('chalk');

const { Client, LocalAuth, MessageMedia  } = require('whatsapp-web.js');

// equivalent to
const defavolia = new Client({
    puppeteer: {
        // for linux
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
    ],
    },
    authStrategy: new LocalAuth({
        clientId: 'isDais',
        dataPath: 'sesi'
    })
});

defavolia.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

defavolia.on('ready', () => {
    console.log(chalk`{magenta Defavolia [Bot]} {green is active now!}`);
});

// prefix
const prefix = "/";


    defavolia.on('message', defa => {
        try {

            if (defa.body.startsWith(prefix)) {
            const command = defa.body.slice(1);
            console.log(defa.body);
            console.log(command);
    
                switch (command) {
                case 'ping':

                    defa.reply('pong');

                    break;
                case 'hai':

                    defa.reply('hai to');

                case "gumbal":

                    defa.reply('_waittt..._')
                    const media = MessageMedia.fromFilePath('./img/gumbal.png');
                    defavolia.sendMessage(defa.from, media);

                    break;
                default:
                    defa.reply(`maaf perintah ${defa.body} tidak tersedia`);
                break;
                
            }}

        } catch (err) {
            console.log(err);
        }
});


defavolia.initialize();
