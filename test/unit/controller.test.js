import { expect } from 'chai'

import { getHello } from '../../src/controller'

describe('controller', () => {
    it('gets the message', () => {
        expect(getHello()).to.eql({ message: 'Hello world'})
    })
})
