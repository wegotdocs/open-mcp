import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_templates_api_templates_get",
  "toolDescription": "List Templates",
  "baseUrl": "https://api.example.com",
  "path": "/api/templates",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool