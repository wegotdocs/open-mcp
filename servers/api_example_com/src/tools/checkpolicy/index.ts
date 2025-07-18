import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checkpolicy",
  "toolDescription": "Check if a user complies with an authorization policy",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/me/check-policy",
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
    "query": {
      "policy": "policy"
    }
  },
  inputParamsSchema
}

export default tool