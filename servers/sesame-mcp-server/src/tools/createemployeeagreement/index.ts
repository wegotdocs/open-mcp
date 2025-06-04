import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createemployeeagreement",
  "toolDescription": "Create employee agreement",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/agreement-employees",
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
    "body": {
      "agreementId": "agreementId",
      "employeeId": "employeeId",
      "startDate": "startDate"
    }
  },
  inputParamsSchema
}

export default tool