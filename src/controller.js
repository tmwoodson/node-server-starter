import Hello from './db/model'

export function getHello() {
    return new Hello({ message: 'Hello world'})
}