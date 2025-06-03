import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "counttransactionforanalytics",
  "toolDescription": "Count transaction for analytics",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/transactions/{transaction_id}/analytics/count",
  "method": "put",
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
      "transaction_id": "transaction_id"
    },
    "body": {
      "is_checked": "is_checked"
    }
  },
  inputParamsSchema
}

export default tool