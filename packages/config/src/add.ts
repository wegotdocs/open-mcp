import fs from "fs"
import path from "path"
import readline from "readline"
import { exec } from "child_process"

const NPM_CHECK_TIMEOUT = 5000

function isValidNpmPackage(serverName: string) {
  return new Promise((resolve) => {
    const npmCheck = exec(`npm view @open-mcp/${serverName} name`)
    const timeout = setTimeout(() => {
      npmCheck.kill()
      resolve(false)
    }, NPM_CHECK_TIMEOUT)

    npmCheck.on("exit", (error) => {
      clearTimeout(timeout)
      resolve(!error)
    })
  })
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

export async function addToClient({
  serverId,
  pathname,
  env = {},
  forwardArgs = {},
}: {
  serverId: string
  pathname: string
  env: Record<string, string>
  forwardArgs: {
    tools?: string
  }
}) {
  const configPath = path.resolve(pathname)

  // Read existing config file or create empty object if not exists
  let config = {} as { mcpServers?: Record<string, any> }
  try {
    if (fs.existsSync(configPath)) {
      const fileContent = fs.readFileSync(configPath, "utf8")
      config = JSON.parse(fileContent)
      // console.log(`Loaded existing config from ${configPath}`)
    } else {
      console.log(
        `Config file doesn't exist. Will create new file at ${configPath}`
      )
    }
  } catch (error: any) {
    console.error(`Error reading config file: ${error.message}`)
    throw error
  }

  const isPublished = await isValidNpmPackage(serverId)
  if (!isPublished) {
    console.error(
      `Couldn't find @open-mcp/${serverId}. Please check your internet connection and also check if the MCP server has been published: https://www.npmjs.com/package/@open-mcp/${serverId}`
    )
    process.exit(1)
  }

  // Extend mcpServers with new configuration
  if (!config.mcpServers) {
    config.mcpServers = {}
  }

  if (config.mcpServers[serverId]) {
    console.log(`The MCP server \`${serverId}\` already exists in your config.`)
    const answer = await new Promise<string>((resolve) => {
      rl.question(`Do you want to overwrite \`${serverId}\`? (y/N): `, resolve)
    })
    rl.close()

    if (answer.toLowerCase() !== "y") {
      console.log("Operation cancelled.")
      process.exit(0)
    }
  }

  const args = ["-y", `@open-mcp/${serverId}`]
  if (forwardArgs.tools) {
    args.push(forwardArgs.tools)
  }

  config.mcpServers[serverId] = {
    command: "npx",
    args,
    env,
  }

  const configDir = path.dirname(configPath)
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true })
  }

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf8")

  console.log(
    `Successfully updated config with ${
      Object.keys(env).length
    } environment variables.`
  )
  console.log(`View your config at "${configPath.replace(/ /g, "\\ ")}"`)
  console.log(
    `Now ensure your MCP client has loaded the updated config. This might involve restarting the client.`
  )
}
