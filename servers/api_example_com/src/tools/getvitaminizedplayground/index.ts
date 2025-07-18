import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvitaminizedplayground",
  "toolDescription": "Get answers using OpenAI APIs",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/playGround/vitaminized",
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
    "header": {
      "connectionId": "connectionId",
      "deploymentId": "deploymentId",
      "temperature": "temperature",
      "maxTokens": "maxTokens"
    }
  },
  inputParamsSchema
}

export default tool