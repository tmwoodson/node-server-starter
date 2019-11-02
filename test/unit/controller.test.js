
import { getHello } from '../../src/controller'

describe('controller', () => {
    it('gets the message', () => {
        expect(getHello().message).toEqual('Hello world')
    })
})
