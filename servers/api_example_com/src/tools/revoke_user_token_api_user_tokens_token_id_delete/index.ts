import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "revoke_user_token_api_user_tokens_token_id_delete",
  "toolDescription": "Revoke User Token",
  "baseUrl": "https://api.example.com",
  "path": "/api/user/tokens/{token_id}",
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
      "token_id": "token_id"
    }
  },
  inputParamsSchema
}

export default tool