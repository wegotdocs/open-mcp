import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettraining",
  "toolDescription": "Get a training",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/training/v1/trainings/{trainingId}",
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