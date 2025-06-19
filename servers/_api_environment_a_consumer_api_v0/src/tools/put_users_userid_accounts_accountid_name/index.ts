import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_users_userid_accounts_accountid_name",
  "toolDescription": "This endpoint does not support being used with an Access Token from the Admin API.\n\nUpdates an account's name.",
  "baseUrl": "https://{API_ENVIRONMENT}/a/consumer/api/v0",
  "path": "/users/{userId}/accounts/{accountId}/name",
  "method": "put",
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
      "userId": "userId",
      "accountId": "accountId"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool