import env from "@liplum/env"
import * as fs from "fs"

console.log(env("GITHUB_OUTPUT").raw())
console.log(env("GITHUB_STATE").raw())
console.log(env("GITHUB_PATH").raw())
console.log(env("GITHUB_PATH").raw())