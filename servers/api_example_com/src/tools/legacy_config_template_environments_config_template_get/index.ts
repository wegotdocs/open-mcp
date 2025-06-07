import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "legacy_config_template_environments_config_template_get",
  "toolDescription": "Legacy Config Template",
  "baseUrl": "https://api.example.com",
  "path": "/environments/config-template",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool