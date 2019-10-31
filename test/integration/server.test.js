
import chai from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('server behavior', () => {
    it('returns successfully', async (done) => {
        chai.request('http://localhost:3000')
            .get('/')
            .end( (err, res) => {
                expect(err).toBeNull()
                expect(res.status).toEqual(200)
                expect(res.body.message).toEqual('Hello world')
                done()
            })
    })
})