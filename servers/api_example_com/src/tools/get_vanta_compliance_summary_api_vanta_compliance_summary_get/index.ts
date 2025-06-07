import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_vanta_compliance_summary_api_vanta_compliance_summary_get",
  "toolDescription": "Get Vanta Compliance Summary",
  "baseUrl": "https://api.example.com",
  "path": "/api/vanta/compliance-summary",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool