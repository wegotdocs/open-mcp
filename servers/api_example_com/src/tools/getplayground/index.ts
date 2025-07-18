import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getplayground",
  "toolDescription": "Get result of the execution of a prompt",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/playGround/process",
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
    "body": {
      "prompt": "prompt",
      "connectionId": "connectionId"
    }
  },
  inputParamsSchema
}

export default tool