import fs from "fs"
import path from "path"
import newConfig from "./mcp-client-config.json" with { type: "json" }
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export async function addToClient(pathname?: string) {
  if (!pathname) {
    throw new Error("Please provide the path to your MCP client config")
  }
  const configPath = path.resolve(pathname)

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

  // Check for key overlaps and ask for confirmation if needed
  const existingKeys = Object.keys(config.mcpServers);
  const newKeys = Object.keys(newConfig.mcpServers);
  const overlappingKeys = newKeys.filter(key => existingKeys.includes(key));
  
  if (overlappingKeys.length > 0) {
    console.log("The following tools already exist in your config and will be overwritten:");
    overlappingKeys.forEach(key => console.log(`- ${key}`));
    
    // Ask for confirmation

    const answer = await new Promise<string>(resolve => {
      rl.question('Do you want to overwrite them? (y/N): ', resolve);
    });
    rl.close();
    
    if (answer.toLowerCase() !== 'y') {
      console.log('Operation cancelled.');
      process.exit(0);
    }
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
}
