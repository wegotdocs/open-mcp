import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gmail_users_settings_sendas_patch",
  "toolDescription": "Patch the specified send-as alias.",
  "baseUrl": "https://gmail.googleapis.com",
  "path": "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}",
  "method": "patch",
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
    },
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
      "userId": "userId",
      "sendAsEmail": "sendAsEmail"
    },
    "body": {
      "displayName": "displayName",
      "isDefault": "isDefault",
      "isPrimary": "isPrimary",
      "replyToAddress": "replyToAddress",
      "sendAsEmail": "b_sendAsEmail",
      "signature": "signature",
      "smtpMsa": "smtpMsa",
      "treatAsAlias": "treatAsAlias",
      "verificationStatus": "verificationStatus"
    }
  },
  inputParamsSchema
}

export default tool