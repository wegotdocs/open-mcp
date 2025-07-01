import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_a_bill_payment",
  "toolDescription": "Create a bill payment",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/bill",
  "method": "post",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "identificationField": "identificationField",
      "scheduleDate": "scheduleDate",
      "description": "description",
      "discount": "discount",
      "interest": "interest",
      "fine": "fine",
      "dueDate": "dueDate",
      "value": "value",
      "externalReference": "externalReference"
    }
  },
  inputParamsSchema
}

export default tool