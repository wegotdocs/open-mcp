import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignemployeestotraining",
  "toolDescription": "Assign employees to a training",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/training/v1/training-employees-assignations/{trainingId}",
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
      "trainingId": "trainingId"
    },
    "body": {
      "employeeIds": "employeeIds"
    }
  },
  inputParamsSchema
}

export default tool