import Hello from './db/model'

export async function getHello(id) {
    const query = Hello.findById(id)
    return query.exec()
}

export function createHello(message) {
    return new Hello( { message })
}