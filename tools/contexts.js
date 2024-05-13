const githubEnv = process.env.GITHUB_ENV
const githubRef = process.env.GITHUB_REF
const paramGitHub = process.argv[2]

console.log("GITHUB_ENV", githubEnv)
console.log("GITHUB_REF", githubRef)
console.log("GitHub contexts from parameter", paramGitHub)