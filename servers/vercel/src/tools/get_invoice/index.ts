import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_invoice",
  "toolDescription": "Get Invoice",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}",
  "method": "get",
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
      "integrationConfigurationId": "integrationConfigurationId",
      "invoiceId": "invoiceId"
    }
  },
  inputParamsSchema
}

export default tool