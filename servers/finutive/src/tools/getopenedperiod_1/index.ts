import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getopenedperiod_1",
  "toolDescription": "Get an opened period",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{businessId}/invoices/opened_period",
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
      "businessId": "businessId"
    },
    "query": {
      "period_name": "period_name"
    }
  },
  inputParamsSchema
}

export default tool