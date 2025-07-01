import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_invoices_for_subscription_charges",
  "toolDescription": "List invoices for subscription charges",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/subscriptions/{id}/invoices",
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
    "path": {
      "id": "id"
    },
    "query": {
      "offset": "offset",
      "limit": "limit",
      "effectiveDate[ge]": "effectiveDate[ge]",
      "effectiveDate[le]": "effectiveDate[le]",
      "externalReference": "externalReference",
      "status": "status",
      "customer": "customer"
    }
  },
  inputParamsSchema
}

export default tool