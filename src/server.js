import server from 'server'
const { get } = server.router
const { send } = server.reply

import connectToDb from '../src/db/connect'
import { getHello } from '../src/controller'

connectToDb()

server([
    get('/', ctx => send(getHello()))
])

console.log('Server running on http://localhost:3000/')
