import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_agents_api_agents_get",
  "toolDescription": "List Agents",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool