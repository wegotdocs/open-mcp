import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_invoices",
  "toolDescription": "List invoices",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/invoices",
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
      "effectiveDate[Ge]": "effectiveDate[Ge]",
      "effectiveDate[Le]": "effectiveDate[Le]",
      "payment": "payment",
      "installment": "installment",
      "externalReference": "externalReference",
      "status": "status",
      "customer": "customer"
    }
  },
  inputParamsSchema
}

export default tool