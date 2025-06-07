import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_audit_statistics_api_audit_statistics_get",
  "toolDescription": "Get Audit Statistics",
  "baseUrl": "https://api.example.com",
  "path": "/api/audit/statistics",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool