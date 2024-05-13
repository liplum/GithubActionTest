const envGitHub = process.env.GITHUB
const paramGitHub = process.argv[2]

console.log("GitHub contexts from env", envGitHub)
console.log("GitHub contexts from parameter", paramGitHub)