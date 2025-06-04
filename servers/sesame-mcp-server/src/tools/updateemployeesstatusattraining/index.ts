import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateemployeesstatusattraining",
  "toolDescription": "Update employee status at a training",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/training/v1/training-employees-status/{assignId}",
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
      "assignId": "assignId"
    },
    "body": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool