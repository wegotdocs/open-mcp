import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_current_user_follows",
  "toolDescription": "Check If User Follows Artists or Users",
  "baseUrl": "https://api.spotify.com/v1",
  "path": "/me/following/contains",
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
      "type": "type",
      "ids": "ids"
    }
  },
  inputParamsSchema
}

export default tool