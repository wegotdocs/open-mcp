import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users_userid_accounts",
  "toolDescription": "This endpoint supports being used with an Access Token from the Admin API with \"View everything – users, messages, settings, and organizations and organization members\" permission for Associated User.\n\nGet all accounts for a user. This endp",
  "baseUrl": "https://{API_ENVIRONMENT}/a/consumer/api/v0",
  "path": "/users/{userId}/accounts",
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
    },
    "query": {
      "active": "active"
    }
  },
  inputParamsSchema
}

export default tool