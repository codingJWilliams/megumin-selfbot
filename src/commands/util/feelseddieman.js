const { Command } = require('discord-akairo');

class PingCommand extends Command {
    constructor() {
        super('feelseddieman', {
            aliases: ['feelseddieman', 'fem'],
            category: 'util'
        });
    }

    async exec(message) {
        var chan = message.channel;
        var m = await chan.fetchMessages({ limit: 3 });
        message.reply(m);
        await message.delete();
        
        /*m.map(async (m) => {
          var eddies = ["382942158682062850", "382942191288320002", "382942228840185856", "382942312654962699", "382942381382828033", "382942385103044608", "382942387858833408", "382942391620861953", "382942393433063436", "382942482792710164"];
          eddies.map( async (eddie) => {
            await m.react(eddie);
          })
        })*/
    }
}

module.exports = PingCommand;
