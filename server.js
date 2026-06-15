console.log('VISION SEND')
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const mineflayer = require('mineflayer')
const vision = require('./vision')

const { pathfinder, Movements, goals } =
require('mineflayer-pathfinder')

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('public'))

let bot = null
let attackLoop = null
let followLoop = null

io.on('connection', (socket) => {

  socket.on('connectBot', (data) => {

    if (bot) bot.end()

    bot = mineflayer.createBot({
      host: data.host,
      port: Number(data.port),
      username: data.username || 'Bot'
    })

    bot.loadPlugin(pathfinder)

    bot.once('spawn', () => {
  socket.emit('status', 'Connected')

  console.log("SPAWN WORKING ✔")

  const { mineflayer: mineflayerViewer } = require('prismarine-viewer')

  mineflayerViewer(bot, {
    port: 3007,
    host: '0.0.0.0',
    firstPerson: true
  })

  console.log("VIEWER STARTED ✔")
})

socket.emit('status', 'Connected')

    setInterval(() => {
      if (!bot || !bot.entity) return

      const pos = bot.entity.position

      socket.emit('stats', {
        health: bot.health,
        food: bot.food,
        xp: bot.experience?.level || 0
      })

      socket.emit('gps', {
        x: pos.x.toFixed(1),
        y: pos.y.toFixed(1),
        z: pos.z.toFixed(1),
        yaw: bot.entity.yaw.toFixed(2),
        pitch: bot.entity.pitch.toFixed(2)
      })

      socket.emit('inventory',
        bot.inventory.items().map(i => ({
          name: i.name,
          count: i.count,
          food: !!i.foodPoints
        }))
      )

      socket.emit(
  'playersList',
  Object.keys(bot.players)
    .filter(n => n !== bot.username)
)

// 👇 حماية كاملة
if (!bot || !bot.entity) return

const v = vision.makeVision(bot)

if (!v) return

socket.emit('vision', v)

    }, 1000)

    bot.on('chat', (u, m) => {
      socket.emit('chatLog', `${u}: ${m}`)
    })

    bot.on('kicked', (r) => {
      socket.emit('status', 'KICKED: ' + r)
    })

    bot.on('end', () => {
      socket.emit('status', 'Disconnected')
    })


  // ⚔ single hit
  socket.on('attack', () => {
    if (!bot) return

    const e = bot.nearestEntity()
    if (!e) return

    try {
      bot.lookAt(e.position.offset(0, 1, 0))
      bot.attack(e)
    } catch {}
  })

  // 🔥 auto attack
  socket.on('toggleAttack', () => {
    if (!bot) return

    if (attackLoop) {
      clearInterval(attackLoop)
      attackLoop = null
      return
    }

    attackLoop = setInterval(() => {
      const e = bot.nearestEntity()
      if (!e) return

      try {
        bot.lookAt(e.position.offset(0, 1, 0))
        bot.attack(e)
      } catch {}
    }, 350)
  })

  // 🖱 right click
  socket.on('rightClick', async () => {
    if (!bot) return
    try { await bot.activateItem() } catch {}
  })

  // 🍗 eat
  socket.on('eatItem', async (name) => {
    if (!bot) return

    const item = bot.inventory.items().find(i => i.name === name)
    if (!item || !item.foodPoints) return

    try {
      await bot.equip(item, 'hand')
      await bot.consume()
    } catch {}
  })

  // 🟥 drop
  socket.on('dropItem', async (name) => {
    if (!bot) return

    const item = bot.inventory.items().find(i => i.name === name)
    if (!item) return

    try {
      await bot.toss(item.type, null, item.count)
    } catch {}
  })

  // ⚔ equip
  socket.on('equipItem', async (name) => {
    if (!bot) return

    const item = bot.inventory.items().find(i => i.name === name)
    if (!item) return

    try {
      await bot.equip(item, 'hand')
    } catch {}
  })

  // 💬 chat
  socket.on('chat', (msg) => {
    if (bot) bot.chat(msg)
  })

  // 👥 follow player
  socket.on('followPlayer', (name) => {
    if (!bot) return

    if (followLoop) clearInterval(followLoop)

    followLoop = setInterval(() => {

      const p = bot.players[name]
      if (!p || !p.entity) return

      const mcData = require('minecraft-data')(bot.version)
      const movements = new Movements(bot, mcData)

      bot.pathfinder.setMovements(movements)

      bot.pathfinder.setGoal(
        new goals.GoalNear(
          p.entity.position.x,
          p.entity.position.y,
          p.entity.position.z,
          2
        )
      )

    }, 1000)
  })

  // 🛑 stop follow
  socket.on('stopFollow', () => {
    if (followLoop) clearInterval(followLoop)
    followLoop = null
    if (bot) bot.pathfinder.setGoal(null)
  })

  // 📍 goto xyz
  socket.on('gotoXYZ', (d) => {
    if (!bot) return

    const mcData = require('minecraft-data')(bot.version)
    const movements = new Movements(bot, mcData)

    bot.pathfinder.setMovements(movements)

    bot.pathfinder.setGoal(
      new goals.GoalBlock(
        parseInt(d.x),
        parseInt(d.y),
        parseInt(d.z)
      )
    )
  })  
    
  })
    
  })

server.listen(3000, () => {
  console.log('Dashboard: http://127.0.0.1:3000')
})