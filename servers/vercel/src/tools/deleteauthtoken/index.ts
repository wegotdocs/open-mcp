import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteauthtoken",
  "toolDescription": "Delete an authentication token",
  "baseUrl": "https://api.vercel.com",
  "path": "/v3/user/tokens/{tokenId}",
  "method": "delete",
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
      "tokenId": "tokenId"
    }
  },
  inputParamsSchema
}

export default tool