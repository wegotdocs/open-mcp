import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "billing_statistics",
  "toolDescription": "Collections statistics",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/finance/payment/statistics",
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
      "customer": "customer",
      "billingType": "billingType",
      "status": "status",
      "anticipated": "anticipated",
      "dateCreated[ge]": "dateCreated[ge]",
      "dateCreated[le]": "dateCreated[le]",
      "dueDate[ge]": "dueDate[ge]",
      "dueDate[le]": "dueDate[le]",
      "estimatedCreditDate[ge]": "estimatedCreditDate[ge]",
      "estimatedCreditDate[le]": "estimatedCreditDate[le]",
      "externalReference": "externalReference"
    }
  },
  inputParamsSchema
}

export default tool