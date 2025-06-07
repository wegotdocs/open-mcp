import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_audit_actions_api_audit_actions_get",
  "toolDescription": "Get Audit Actions",
  "baseUrl": "https://api.example.com",
  "path": "/api/audit/actions",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool