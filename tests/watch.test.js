import path from 'path'
import fs from 'fs'
import { exec } from 'child_process'

const babelNode = path.resolve(__dirname, '../node_modules/.bin/babel-node')
const buildScript = `${babelNode} ${path.resolve(__dirname, '../src/watch.js')}`

describe('watch', () => {
  describe('without arguments', () => {
    it('should all files', async () => {
      const promise = new Promise((resolve, reject) => {
        const child = exec(buildScript)
        child.stdout.on('data', data => {
          try {
            if (data.match(/-> Watching for changes.../)) {
              fs.writeFileSync(
                path.resolve(__dirname, 'sandbox/packages/a/src/foo.js'),
                'console.log("hello2")',
              )
            } else if (data.match(/-> change: foo.js/)) {
              resolve()
            }
          } catch (err) {
            reject(err)
          }
        })
      })

      return promise
    })
  })
})
