const {
    Command
} = require('klasa');

const {
    getEmbed
} = require('../../util/embed.js');

module.exports = class extends Command {

    constructor(...args) {
        /**
         * Any default options can be omitted completely.
         * if all options are default, you can omit the constructor completely
         */
        super(...args, {
            enabled: true,
            runIn: ['text', 'dm', 'group'],
            requiredPermissions: [],
            requiredSettings: [],
            aliases: [],
            autoAliases: true,
            bucket: 1,
            cooldown: 0,
            promptLimit: 0,
            promptTime: 30000,
            deletable: false,
            guarded: false,
            nsfw: false,
            permissionLevel: 0,
            description: 'Displays bot latency',
            extendedHelp: 'No extended help available.',
            usage: '',
            usageDelim: undefined,
            quotedStringSupport: false,
            subcommands: false
        });
    }

    async run(message, [...params]) {
        let embed = getEmbed('Ping', '',
            9529293, [{
                "name": "`Pong!`",
                "value": `Message Latency: **${Math.round(new Date().getTime() - message.createdTimestamp)} ms**\nClient Latency: **${Math.round(this.client.ping)} ms**`
            }]
        );
        message.channel.send({
            embed
        });
    }

    async init() {
        /*
         * You can optionally define this method which will be run when the bot starts
         * (after login, so discord data is available via this.client)
         */
    }

};