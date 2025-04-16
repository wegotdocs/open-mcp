import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { registerTools } from "@open-mcp/core"
import type { OpenMCPServerTool } from "@open-mcp/core"
import {
  SERVER_NAME,
  SERVER_VERSION,
  OPERATION_FILES_RELATIVE,
} from "./constants.js"

const server = new McpServer({
  name: SERVER_NAME,
  version: SERVER_VERSION,
})

export async function runServer() {
  try {
    const tools: OpenMCPServerTool[] = []
    for (const file of OPERATION_FILES_RELATIVE) {
      const tool = (await import(file)).default as OpenMCPServerTool
      tools.push(tool)
    }
    await registerTools(server, tools)
    const transport = new StdioServerTransport()
    await server.connect(transport)
    console.error("MCP Server running on stdio")
  } catch (error) {
    console.error("Error during initialization:", error)
    process.exit(1)
  }
}
