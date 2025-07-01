import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "schedule_invoice",
  "toolDescription": "Schedule invoice",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/invoices",
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
      "payment": "payment",
      "installment": "installment",
      "customer": "customer",
      "serviceDescription": "serviceDescription",
      "observations": "observations",
      "externalReference": "externalReference",
      "value": "value",
      "deductions": "deductions",
      "effectiveDate": "effectiveDate",
      "municipalServiceId": "municipalServiceId",
      "municipalServiceCode": "municipalServiceCode",
      "municipalServiceName": "municipalServiceName",
      "updatePayment": "updatePayment",
      "taxes": "taxes"
    }
  },
  inputParamsSchema
}

export default tool