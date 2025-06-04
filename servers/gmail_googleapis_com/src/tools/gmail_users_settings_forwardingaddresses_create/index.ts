import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gmail_users_settings_forwardingaddresses_create",
  "toolDescription": "Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status s",
  "baseUrl": "https://gmail.googleapis.com",
  "path": "/gmail/v1/users/{userId}/settings/forwardingAddresses",
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
      "forwardingEmail": "forwardingEmail",
      "verificationStatus": "verificationStatus"
    }
  },
  inputParamsSchema
}

export default tool