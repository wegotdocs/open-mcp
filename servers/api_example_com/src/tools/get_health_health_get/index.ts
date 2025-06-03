import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_health_health_get",
  "toolDescription": "Get Health",
  "baseUrl": "https://api.example.com",
  "path": "/health",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool