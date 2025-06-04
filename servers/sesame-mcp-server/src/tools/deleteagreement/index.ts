import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteagreement",
  "toolDescription": "Delete agreement",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/agreements/{agreementId}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool