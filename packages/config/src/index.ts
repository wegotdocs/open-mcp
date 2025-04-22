#!/usr/bin/env node

const args = process.argv

const command = args[2]

if (command === "add") {
  const serverId = args[3]
  if (!serverId || serverId.startsWith("--")) {
    console.error("Please provide a valid server ID as the first argument")
    process.exit(1)
  }

  const configPath = args[4]
  if (!configPath || configPath.startsWith("--")) {
    console.error("Please provide a valid config path as the second argument")
    process.exit(1)
  }

  // Parse remaining arguments as key-value pairs
  const envVars: Record<string, string> = {}
  const forwardArgs: {
    tools?: string
  } = {}
  for (let i = 5; i < args.length; i++) {
    const arg = args[i]
    if (arg.startsWith("--")) {
      const keyValue = arg.substring(2).split("=")
      if (keyValue.length !== 2) {
        console.error(`Invalid argument: ${arg}`)
        process.exit(1)
      }
      if (keyValue[0] === "tools") {
        forwardArgs.tools = arg
      } else {
        envVars[keyValue[0]] = keyValue[1]
      }
    } else {
      console.error(`Invalid argument: ${arg}`)
      process.exit(1)
    }
  }

  import("./add.js")
    .then((module) =>
      module.addToClient({
        serverId,
        pathname: configPath,
        env: envVars,
        forwardArgs,
      })
    )
    .then(() => {
      process.exit(0)
    })
    .catch((error) => {
      console.error(`Failed to update config: ${error.message}`)
      process.exit(1)
    })
} else if (command === "remove") {
  const serverId = args[3]
  if (!serverId || serverId.startsWith("--")) {
    console.error("Please provide a valid server ID as the first argument")
    process.exit(1)
  }

  const configPath = args[4]
  if (!configPath || configPath.startsWith("--")) {
    console.error("Please provide a valid config path as the second argument")
    process.exit(1)
  }

  import("./remove.js")
    .then((module) =>
      module.removeFromClient({
        serverId,
        pathname: configPath,
      })
    )
    .then(() => {
      process.exit(0)
    })
    .catch((error) => {
      console.error(`Failed to remove MCP server from config: ${error.message}`)
      process.exit(1)
    })
} else {
  console.error(
    `Invalid command: ${command}. See docs at https://www.npmjs.com/package/@open-mcp/config`
  )
  process.exit(1)
}
