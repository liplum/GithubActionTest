const githubEnv = process.env.GITHUB_ENV
const githubRef = process.env.GITHUB_REF
const paramGitHub = process.argv[2]

console.log("GITHUB_ENV", githubEnv)
console.log("GITHUB_REF", githubRef)
console.log("GitHub contexts from parameter", paramGitHub)

if (typeof paramGitHub == "object") {
  console.log("GitHub context is an object")
  for (const [key, value] of Object.entries(paramGitHub)) {
    console.log(key, value)
  }
} else {
  console.log(`GitHub context is a ${typeof paramGitHub}`)
}