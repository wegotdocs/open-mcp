import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_health",
  "toolDescription": "Health check",
  "baseUrl": "https://api.example.com",
  "path": "/api/health",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool