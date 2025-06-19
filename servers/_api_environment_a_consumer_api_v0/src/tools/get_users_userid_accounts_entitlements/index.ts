import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users_userid_accounts_entitlements",
  "toolDescription": "This endpoint does not support being used with an Access Token from the Admin API.\n\nGets entitlements for all accounts",
  "baseUrl": "https://{API_ENVIRONMENT}/a/consumer/api/v0",
  "path": "/users/{userId}/accounts/entitlements",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OIDC_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OIDC_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool