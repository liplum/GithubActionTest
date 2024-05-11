import { simpleGit } from 'simple-git'

const git = simpleGit()

async function main() {
  const tags = await git.tags()
  console.log("Git tags", tags)
}

main()
