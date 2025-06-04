import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listemployeesintraining",
  "toolDescription": "List employees from a training",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/training/v1/training-employees-assignations/{trainingId}",
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
      "trainingId": "trainingId"
    }
  },
  inputParamsSchema
}

export default tool