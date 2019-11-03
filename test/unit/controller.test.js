
import { getHello, createHello } from '../../src/controller'

import Hello from '../../src/db/model'

describe('controller', () => {

    describe('POST', () => {
        it('creates a new resource', () => {
            expect(createHello('Hola').message).toEqual('Hola')
        })
    })

    describe('GET', () => {
        beforeEach(() => {
            const mockedFindById = (id) => {
                return {
                    exec: async () => Promise.resolve({ message: "Hello", _id: id})
                }
            }

            jest.spyOn(Hello, 'findById')
                .mockImplementation(mockedFindById)

        })


        afterEach(() => {
            jest.clearAllMocks()
        })

        it('gets a resource if it exists', async () => {
            const hello = await getHello('abc-123')
            expect(hello.message).toEqual('Hello')
            expect(hello._id).toEqual('abc-123')
        })
    })
})
