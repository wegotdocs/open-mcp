import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postrelaunchprocessbatch",
  "toolDescription": "Relaunch batch process.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/process/relaunch",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "ProcessStatusId": "ProcessStatusId"
    }
  },
  inputParamsSchema
}

export default tool