import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteemployeeagreement",
  "toolDescription": "Delete employee agreement",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/agreement-employees/{agreementEmployeeId}",
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
      "agreementEmployeeId": "agreementEmployeeId"
    }
  },
  inputParamsSchema
}

export default tool