const express = require('express')
const expressWs = require('express-ws')
const internalIp = require('internal-ip')

const wsOptions = { clientTracking: true }
const WS = expressWs(express(), null, { wsOptions })
const server = WS.getWss()
const app = WS.app

// const games = {}

app.ws('/', (ws) => {
  ws.on('message', (msg) => {
    // we shouldn't need server.clients... TODO generic broadcast
    server.clients.forEach((client) => client.send(msg))
  })
})

const ip = internalIp()
const port = 4850

app.listen(port, () => {
  console.log(`Service running on  ${ip}:${port}`)
})
