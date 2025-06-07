import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_settings_api_settings_get",
  "toolDescription": "Get Settings",
  "baseUrl": "https://api.example.com",
  "path": "/api/settings",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool