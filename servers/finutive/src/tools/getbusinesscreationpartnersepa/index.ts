import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinesscreationpartnersepa",
  "toolDescription": "Get business creation partner SEPA details",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/business-creation/partners/{partner_id}/sepa",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id",
      "partner_id": "partner_id"
    },
    "query": {
      "is_autonomous": "is_autonomous",
      "contribution_base": "contribution_base"
    }
  },
  inputParamsSchema
}

export default tool