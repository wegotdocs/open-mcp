import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_settings_debug_api_settings_debug_post",
  "toolDescription": "Update Settings Debug",
  "baseUrl": "https://api.example.com",
  "path": "/api/settings/debug",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool