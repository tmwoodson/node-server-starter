import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)

const API_BASE = 'http://localhost:3000'

describe('server behavior', () => {

    it('creates a new resource', async (done) => {
        chai.request(API_BASE)
            .post('/')
            .send({message: 'Hola'})
            .end((err, res) => {
                expect(err).toBeNull()
                expect(res.status).toEqual(201)
                expect(res.body.message).toEqual('Hola')
                done()
            })

    })

    describe('GET record by id', () => {
        let id = null

        beforeEach(async (done) => {
            chai.request(API_BASE)
                .post('/')
                .send({message: 'Meow'})
                .end((err, res) => {
                    expect(res.body.message).toEqual('Meow')
                    id = res.body._id
                    done()
                })
        })

        it('finds a previously created record', async (done) => {
            console.log('id:', id)
            chai.request(API_BASE)
                .get(`/${id}`)
                .end((err, res) => {
                    expect(err).toBeNull()
                    expect(res.status).toEqual(200)
                    expect(res.body.message).toEqual('Meow')
                    done()
                })
        })
    })

})