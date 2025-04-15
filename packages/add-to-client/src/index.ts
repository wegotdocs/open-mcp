#!/usr/bin/env node
const args = process.argv

const serverId = args[2]
if (!serverId || serverId.startsWith("--")) {
  console.error("Please provide a valid server ID as the first argument")
  process.exit(1)
}

const configPath = args[3]
if (!configPath || configPath.startsWith("--")) {
  console.error("Please provide a valid config path as the second argument")
  process.exit(1)
}

// Parse remaining arguments as key-value pairs
const envVars: Record<string, string> = {}
for (let i = 4; i < args.length; i++) {
  const arg = args[i]
  if (arg.startsWith("--")) {
    const keyValue = arg.substring(2).split("=")
    if (keyValue.length !== 2) {
      console.error(`Invalid argument: ${arg}`)
      process.exit(1)
    }
    envVars[keyValue[0]] = keyValue[1]
  } else {
    console.error(`Invalid argument: ${arg}`)
    process.exit(1)
  }
}

import("./add-to-client.js")
  .then((module) => module.addToClient(serverId, configPath, envVars))
  .then(() => {
    process.exit(0)
  })
  .catch((error) => {
    console.error(`Failed to update config: ${error.message}`)
    process.exit(1)
  })
