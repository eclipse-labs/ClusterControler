import { Bridge } from "discord-cross-hosting"
import * as config from "./Config"

let ready = Date.now()
const server = new Bridge({
    port: config.port,
    authToken: config.authToken,
    totalShards: config.totalShards,
    shardsPerCluster: config.shardsPerCluster,
    totalMachines: config.totalMachines,
    token: config.token
})

server.on("clientRequest", (message, client) => {

    // @ts-ignore
    if (message?.requestStatus) message.reply({
        memory: process.memoryUsage().rss,
        uptime: ready ? Date.now() - ready : 0
    })
})

server.on("debug", console.log)
server.start()