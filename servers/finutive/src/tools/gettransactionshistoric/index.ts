import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettransactionshistoric",
  "toolDescription": "Get transactions historic",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/transactions/historic",
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
      "business_id": "business_id"
    },
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "start_amount": "start_amount",
      "end_amount": "end_amount",
      "accounts": "accounts",
      "size": "size",
      "offset": "offset",
      "select_all": "select_all"
    }
  },
  inputParamsSchema
}

export default tool