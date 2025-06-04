import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gmail_users_settings_delegates_create",
  "toolDescription": "Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same Google Workspace organization as the delegator user. Gmail imposes limitations o",
  "baseUrl": "https://gmail.googleapis.com",
  "path": "/gmail/v1/users/{userId}/settings/delegates",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "userId": "userId"
    },
    "body": {
      "delegateEmail": "delegateEmail",
      "verificationStatus": "verificationStatus"
    }
  },
  inputParamsSchema
}

export default tool