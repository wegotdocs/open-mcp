import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_auth_config_api_auth_config_get",
  "toolDescription": "Get Auth Config",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/config",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool