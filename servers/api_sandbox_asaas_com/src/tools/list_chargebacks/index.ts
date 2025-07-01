import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_chargebacks",
  "toolDescription": "List chargebacks",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/chargebacks/",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "offset": "offset",
      "limit": "limit",
      "creditCardBrand": "creditCardBrand",
      "originDisputeDate[le]": "originDisputeDate[le]",
      "originDisputeDate[ge]": "originDisputeDate[ge]",
      "originTransactionDate[le]": "originTransactionDate[le]",
      "originTransactionDate[ge]": "originTransactionDate[ge]",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool