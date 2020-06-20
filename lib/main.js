const { WebhookClient } = require('discord.js')

exports.hook = (id, token, message) => {
    const hook = new WebhookClient(id, token);

    hook.send(message)
}
