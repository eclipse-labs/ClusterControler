import { Bridge } from "discord-cross-hosting"

const server = new Bridge({
    port: 3000,
    authToken: "bonero",
    totalShards: 1,
    totalMachines: 1,
    shardsPerCluster: 5,
    token: "NjgzMDQwNDYxNDM0Mzg4NTAx.GHJ0an.NJiFkZmUhY-7-87Mfz4fhZd2i-FaUgoIlinINM",
})

server.on("debug", console.log)
server.start()

server.on("ready", url => {
    console.log("Server is ready" + url);
})