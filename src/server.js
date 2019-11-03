import server from 'server'

const {get, post, error} = server.router
const {send, status} = server.reply

import connectToDb from '../src/db/connect'
import {getHello, createHello} from '../src/controller'

connectToDb()

const meow = async (id) => {
    return await getHello(id)
}

server(
    {security: false},
    [
        get('/:id', async ctx => send(await getHello(ctx.params.id))),
        post('/', async ctx => status(201).json(await createHello(ctx.data.message).save())),
        error(ctx => status(500).send(ctx.error.message))
    ]
)

console.log('Server running on http://localhost:3000/')
