import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_template_prefixes_api_environments_template_prefixes_get",
  "toolDescription": "Get Template Prefixes",
  "baseUrl": "https://api.example.com",
  "path": "/api/environments/template-prefixes",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool