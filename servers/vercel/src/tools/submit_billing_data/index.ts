import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "submit_billing_data",
  "toolDescription": "Submit Billing Data",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/installations/{integrationConfigurationId}/billing",
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
      "timestamp": "timestamp",
      "eod": "eod",
      "period": "period",
      "billing": "billing",
      "usage": "usage"
    }
  },
  inputParamsSchema
}

export default tool