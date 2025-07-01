import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_configuration_for_issuance_of_invoices",
  "toolDescription": "Update configuration for issuing invoices",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/subscriptions/{id}/invoiceSettings",
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
      "deductions": "deductions",
      "effectiveDatePeriod": "effectiveDatePeriod",
      "receivedOnly": "receivedOnly",
      "daysBeforeDueDate": "daysBeforeDueDate",
      "observations": "observations",
      "taxes": "taxes"
    }
  },
  inputParamsSchema
}

export default tool