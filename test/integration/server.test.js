import testSetup from '../test-setup'
testSetup()

import { expect } from 'chai'
import chai from 'chai'

describe('server behavior', () => {
    it('returns successfully', async () => {
        chai.request('http://localhost:3000')
            .get('/')
            .end( (err, res) => {
                expect(err).to.be.null
                expect(res.status).to.equal(200)
                expect(res.body.message).to.equal('Hello world')
            })
    })
})