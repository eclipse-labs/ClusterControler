import { Bridge } from "discord-cross-hosting"

const server = new Bridge({
    port: 3000,
    authToken: "bonero",
    totalShards: "auto",
    shardsPerCluster: 5,
    totalMachines: 1,
    token: "NjgzMDQwNDYxNDM0Mzg4NTAx.GHJ0an.NJiFkZmUhY-7-87Mfz4fhZd2i-FaUgoIlinINM",
})

server.on("debug", console.log)
server.start()