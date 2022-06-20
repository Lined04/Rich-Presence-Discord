const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
const config = require("./config.json")
client.on('ready', () => {
    console.log('Rich-Presence activee')
    client.request('SET_ACTIVITY', {
        pid: process.pid,

        activity: {
            details: config.details,
            state: config.state,

            assets: {
                large_image: config.large_image,
                large_text: config.large_image_text,
                small_image: config.small_image,

                //(Vous ne pouvez pas cliquer sur vos propres boutons)
            },
            buttons: [
                { label: config.button_label1, url: config.button_url1 },
                { label: config.button_label2, url: config.button_url2 }
            ]
        }
    })
})

client.login({ clientId: config.Application_ID }).catch(console.error);

//développé par Lined(Discord : Lined#7833)
