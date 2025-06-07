import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_environment_variables_api_settings_env_vars_get",
  "toolDescription": "Get Environment Variables",
  "baseUrl": "https://api.example.com",
  "path": "/api/settings/env-vars",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool