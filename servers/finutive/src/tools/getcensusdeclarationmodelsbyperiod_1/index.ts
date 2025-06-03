import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcensusdeclarationmodelsbyperiod_1",
  "toolDescription": "Get census declaration models by period",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/census_statements/{period}",
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
      "businessId": "businessId",
      "period": "period"
    },
    "query": {
      "period_name": "period_name",
      "exclude_asociated_models": "exclude_asociated_models"
    }
  },
  inputParamsSchema
}

export default tool