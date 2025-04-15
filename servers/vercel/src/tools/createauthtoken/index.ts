import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createauthtoken",
  "toolDescription": "Create an Auth Token",
  "baseUrl": "https://api.vercel.com",
  "path": "/v3/user/tokens",
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
    "query": {
      "teamId": "teamId",
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "expiresAt": "expiresAt"
    }
  },
  inputParamsSchema
}

export default tool