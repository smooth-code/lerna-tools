import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const babelNode = path.resolve(__dirname, '../node_modules/.bin/babel-node')
const buildScript = `${babelNode} ${path.resolve(__dirname, '../src/build.js')}`

const ex = promisify(exec)

describe('build', () => {
  describe('without arguments', () => {
    it('should all files', async () => {
      const { stdout } = await ex(buildScript)
      expect(stdout).toMatch(/Building packages/)
      expect(stdout).toMatch(/DONE/)
    })
  })

  describe('with argument', () => {
    it('should build files', async () => {
      const { stdout } = await ex(`${buildScript} packages/a/src/a.js`)
      expect(stdout).toMatch(/• a\/src\/a.js ⇒ a\/lib\/a.js/)
    })
  })
})
