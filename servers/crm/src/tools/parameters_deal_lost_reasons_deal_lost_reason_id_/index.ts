import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_deal_lost_reasons_deal_lost_reason_id_",
  "toolDescription": "",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_lost_reasons/{deal_lost_reason_id}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool