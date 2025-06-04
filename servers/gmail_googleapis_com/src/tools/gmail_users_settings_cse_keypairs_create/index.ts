import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gmail_users_settings_cse_keypairs_create",
  "toolDescription": "Creates and uploads a client-side encryption S/MIME public key certificate chain and private key metadata for the authenticated user.",
  "baseUrl": "https://gmail.googleapis.com",
  "path": "/gmail/v1/users/{userId}/settings/cse/keypairs",
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
      "userId": "userId"
    },
    "body": {
      "disableTime": "disableTime",
      "enablementState": "enablementState",
      "keyPairId": "keyPairId",
      "pem": "pem",
      "pkcs7": "pkcs7",
      "privateKeyMetadata": "privateKeyMetadata",
      "subjectEmailAddresses": "subjectEmailAddresses"
    }
  },
  inputParamsSchema
}

export default tool