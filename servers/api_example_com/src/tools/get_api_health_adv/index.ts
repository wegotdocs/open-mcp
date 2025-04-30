import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_health_adv",
  "toolDescription": "Advanced Health check with coroutine and thread information",
  "baseUrl": "https://api.example.com",
  "path": "/api/health_adv",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool