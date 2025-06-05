import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_account_oauth_token",
  "toolDescription": "account/oauth/token",
  "baseUrl": "http://{{baseurl}}",
  "path": "/api/account/oauth/token",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "noauth <mcp-env-var>NOAUTH_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "NOAUTH_CREDENTIALS"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool