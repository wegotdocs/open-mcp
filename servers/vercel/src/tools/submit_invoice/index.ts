import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "submit_invoice",
  "toolDescription": "Submit Invoice",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/installations/{integrationConfigurationId}/billing/invoices",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "integrationConfigurationId": "integrationConfigurationId"
    },
    "body": {
      "externalId": "externalId",
      "invoiceDate": "invoiceDate",
      "memo": "memo",
      "period": "period",
      "items": "items",
      "discounts": "discounts",
      "test": "test"
    }
  },
  inputParamsSchema
}

export default tool