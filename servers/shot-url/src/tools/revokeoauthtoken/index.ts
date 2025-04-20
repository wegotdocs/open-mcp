import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "revokeoauthtoken",
  "toolDescription": "アクセストークンの取消",
  "baseUrl": "https://api.example.com",
  "path": "/oauth2/revoke",
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
      "token": "token",
      "token_type_hint": "token_type_hint"
    }
  },
  inputParamsSchema
}

export default tool