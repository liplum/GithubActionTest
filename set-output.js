import env from "@liplum/env"
import * as fs from "fs"

const githubOutput = env("GITHUB_OUTPUT").string()
const githubState = env("GITHUB_STATE").string()
const githubPath = env("GITHUB_PATH").string()
const githubEnv = env("GITHUB_ENV").string()
console.log(githubOutput)
console.log(githubState)
console.log(githubPath)
console.log(githubEnv)

await fs.promises.appendFile(githubOutput, "TEST=LiplumOutput\n", {
  encoding: 'utf8'
})
await fs.promises.appendFile(githubState, "TEST=LiplumState\n", {
  encoding: 'utf8'
})
await fs.promises.appendFile(githubEnv, "TEST=LiplumEnv\n", {
  encoding: 'utf8'
})

const multilines = `Hello, I'm Liplum.%0AWelcome to my repository.%0AI would do some testing here.%0A`

await fs.promises.appendFile(githubOutput, `MULTILINES="${multilines}"\n`, {
  encoding: 'utf8'
})