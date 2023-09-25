import { main } from './main'

describe('main function test', () => {
    it('return 0', async () => {
        const value = await main()
        expect(value).toBe(0)
    })
})
