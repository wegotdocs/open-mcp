import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_health",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/health",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool