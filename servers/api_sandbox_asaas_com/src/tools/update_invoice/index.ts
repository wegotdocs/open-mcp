import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_invoice",
  "toolDescription": "Update invoice",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/invoices/{id}",
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
      "serviceDescription": "serviceDescription",
      "observations": "observations",
      "externalReference": "externalReference",
      "value": "value",
      "deductions": "deductions",
      "effectiveDate": "effectiveDate",
      "updatePayment": "updatePayment",
      "taxes": "taxes"
    }
  },
  inputParamsSchema
}

export default tool