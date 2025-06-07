import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generate_config_template_api_environments_config_template_get",
  "toolDescription": "Generate Config Template",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/config-template",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool