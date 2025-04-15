import fs from "fs"
import path from "path"
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export async function removeFromClient(serverId: string, pathname: string) {
  const configPath = path.resolve(pathname)

  // Read existing config file or create empty object if not exists
  let config = {} as { mcpServers?: Record<string, any> }
  try {
    if (fs.existsSync(configPath)) {
      const fileContent = fs.readFileSync(configPath, "utf8")
      config = JSON.parse(fileContent)
    } else {
      console.log(`Config file doesn't exist.`)
      process.exit(0)
    }
  } catch (error: any) {
    console.error(`Error reading config file: ${error.message}`)
    throw error
  }

  if (!config.mcpServers?.[serverId]) {
    console.log(`MCP server \`${serverId}\` not found in config.`)
    process.exit(0)
  }

  const answer = await new Promise<string>((resolve) => {
    rl.question(
      `Are you sure you want to remove \`${serverId}\` from your config? (y/N): `,
      resolve
    )
  })
  rl.close()

  if (answer.toLowerCase() !== "y") {
    console.log("Operation cancelled.")
    process.exit(0)
  }

  delete config.mcpServers[serverId]

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf8")

  console.log(`Successfully removed MCP server \`${serverId}\` from config.`)
  console.log(`View your config at "${configPath.replace(/ /g, "\\ ")}"`)
  console.log(
    `Now ensure your MCP client has loaded the updated config. This might involve restarting the client.`
  )
}
