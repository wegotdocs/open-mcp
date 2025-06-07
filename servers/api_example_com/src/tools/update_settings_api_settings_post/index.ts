import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_settings_api_settings_post",
  "toolDescription": "Update Settings",
  "baseUrl": "https://api.example.com",
  "path": "/api/settings",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool