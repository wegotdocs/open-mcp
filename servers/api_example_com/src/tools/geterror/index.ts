import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "geterror",
  "toolDescription": "Get an error by the given code",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/playGround/error/{errorId}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "errorId": "errorId"
    }
  },
  inputParamsSchema
}

export default tool