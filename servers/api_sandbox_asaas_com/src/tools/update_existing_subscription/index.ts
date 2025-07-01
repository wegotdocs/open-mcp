import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_existing_subscription",
  "toolDescription": "Update existing subscription",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/subscriptions/{id}",
  "method": "put",
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
    "body": {
      "billingType": "billingType",
      "status": "status",
      "nextDueDate": "nextDueDate",
      "discount": "discount",
      "interest": "interest",
      "fine": "fine",
      "cycle": "cycle",
      "description": "description",
      "endDate": "endDate",
      "updatePendingPayments": "updatePendingPayments",
      "externalReference": "externalReference",
      "split": "split",
      "callback": "callback"
    }
  },
  inputParamsSchema
}

export default tool