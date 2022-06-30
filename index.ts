import { Bridge } from "discord-cross-hosting"
import * as config from "./Config"

const server = new Bridge({
    port: config.port,
    authToken: config.authToken,
    totalShards: config.totalShards,
    shardsPerCluster: config.shardsPerCluster,
    totalMachines: config.totalMachines,
    token: config.token
})

server.on("debug", console.log)
server.start()