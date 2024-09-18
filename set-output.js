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

await fs.promises.appendFile(githubOutput, "TEST=LiplumOutput", {
  encoding: 'utf8'
})
await fs.promises.appendFile(githubState, "TEST=LiplumState", {
  encoding: 'utf8'
})
await fs.promises.appendFile(githubEnv, "TEST=LiplumEnv", {
  encoding: 'utf8'
})

const multilines = `
Hello, I'm Liplum.
Welcome to my repository.
I would do some testing here.
`

await fs.promises.appendFile(githubOutput, `MULTILINES="${multilines}"`, {
  encoding: 'utf8'
})