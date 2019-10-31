import server from 'server'

const { get } = server.router
const { send } = server.reply

import { getHello } from '../src/controller'

server([
    get('/', ctx => send(getHello()))
])

console.log('Server running on http://localhost:3000/')
