
import { getHello } from '../../src/controller'

describe('controller', () => {
    it('gets the message', () => {
        expect(getHello()).toEqual({ message: 'Hello world'})
    })
})
