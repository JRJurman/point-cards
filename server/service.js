const express = require('express')
const expressWs = require('express-ws')
const internalIp = require('internal-ip')

const wsOptions = { clientTracking: true }
const WS = expressWs(express(), null, { wsOptions })
const server = WS.getWss()
const app = WS.app

app.ws('/room/:room', (ws, req) => {
  ws.on('message', (msg) => {
    Array.from(server.clients)
      .filter(client => client.upgradeReq.url === ws.upgradeReq.url)
      .forEach(client => client.send(msg))
  })
})

const ip = internalIp()
const port = 4850

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Service running on  ${ip}:${port}`)
})
