const { WebhookClient } = require('discord.js')

exports.hook = (id, token, message) => {
    const hook = WebhookClient(id, token);

    hook.send(message)
}
