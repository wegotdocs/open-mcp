import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_existing_payment",
  "toolDescription": "Update existing payment",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments/{id}",
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
      "value": "value",
      "dueDate": "dueDate",
      "description": "description",
      "daysAfterDueDateToRegistrationCancellation": "daysAfterDueDateToRegistrationCancellation",
      "externalReference": "externalReference",
      "discount": "discount",
      "interest": "interest",
      "fine": "fine",
      "postalService": "postalService",
      "split": "split",
      "callback": "callback"
    }
  },
  inputParamsSchema
}

export default tool