import fs from "fs"
import path from "path"
import newConfig from "./mcp-client-config.json" assert { type: "json" }

async function main() {
  try {
    // Get config file path from command line arguments
    const args = process.argv.slice(2)
    if (args.length !== 1) {
      throw new Error("Please provide a single pathname argument")
    }
    const configPath = path.resolve(args[0])

    // Read existing config file or create empty object if not exists
    let config = {} as { mcpServers?: Record<string, any> }
    try {
      if (fs.existsSync(configPath)) {
        const fileContent = fs.readFileSync(configPath, "utf8")
        config = JSON.parse(fileContent)
        console.log(`Loaded existing config from ${configPath}`)
      } else {
        console.log(
          `Config file doesn't exist. Will create new file at ${configPath}`
        )
      }
    } catch (error: any) {
      console.error(`Error reading config file: ${error.message}`)
      throw error
    }

    // Extend mcpServers with new configuration
    if (!config.mcpServers) {
      config.mcpServers = {}
    }

    config.mcpServers = {
      ...config.mcpServers,
      ...newConfig.mcpServers,
    }

    // Create directory if it doesn't exist
    const configDir = path.dirname(configPath)
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true })
    }

    // Save the updated config
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf8")
    console.log(`Successfully updated config at ${configPath}`)
  } catch (error: any) {
    console.error(`Failed to update config: ${error.message}`)
    process.exit(1)
  }
}

main()
