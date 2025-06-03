import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsuggestionsforconciliate",
  "toolDescription": "Get conciliation suggestions",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/banks/transactions/{transaction_id}/suggestions",
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
      "transaction_id": "transaction_id"
    },
    "query": {
      "requestDto": "requestDto"
    }
  },
  inputParamsSchema
}

export default tool