import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_platform_public_status",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/status/public",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool