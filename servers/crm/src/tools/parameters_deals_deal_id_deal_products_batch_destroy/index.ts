import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_deals_deal_id_deal_products_batch_destroy",
  "toolDescription": "",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deals/{deal_id}/deal_products/batch/destroy",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool