import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprevision",
  "toolDescription": "Get tax prevision",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/balances/prevision",
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
      "period": "period",
      "account": "account"
    }
  },
  inputParamsSchema
}

export default tool