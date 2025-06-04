import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateagreement",
  "toolDescription": "Update an agreement",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/agreements/{agreementId}",
  "method": "put",
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
      "agreementId": "agreementId"
    },
    "body": {
      "name": "name",
      "code": "code",
      "color": "color",
      "annualHours": "annualHours"
    }
  },
  inputParamsSchema
}

export default tool