import getPackages from '../src/getPackages'

describe('getPackages', () => {
  it('should return all packages', () => {
    const packages = getPackages()
    expect(packages).toHaveLength(2)
    expect(packages[0]).toMatch(/tests\/sandbox\/packages\/a$/)
    expect(packages[1]).toMatch(/tests\/sandbox\/packages\/b$/)
  })
})
