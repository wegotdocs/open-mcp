import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getauthtoken",
  "toolDescription": "Get Auth Token Metadata",
  "baseUrl": "https://api.vercel.com",
  "path": "/v5/user/tokens/{tokenId}",
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
      "tokenId": "tokenId"
    }
  },
  inputParamsSchema
}

export default tool