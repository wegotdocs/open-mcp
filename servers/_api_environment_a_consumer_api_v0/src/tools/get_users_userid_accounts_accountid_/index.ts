import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users_userid_accounts_accountid_",
  "toolDescription": "This endpoint supports being used with an Access Token from the Admin API with \"View everything – users, messages, settings, and organizations and organization members\" permission for Associated User.\n\nGet a single account for a user",
  "baseUrl": "https://{API_ENVIRONMENT}/a/consumer/api/v0",
  "path": "/users/{userId}/accounts/{accountId}",
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
      "userId": "userId",
      "accountId": "accountId"
    }
  },
  inputParamsSchema
}

export default tool