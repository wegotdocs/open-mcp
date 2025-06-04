import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gmail_users_settings_cse_identities_patch",
  "toolDescription": "Associates a different key pair with an existing client-side encryption identity. The updated key pair must validate against Google's [S/MIME certificate profiles](https://support.google.com/a/answer/7300887).",
  "baseUrl": "https://gmail.googleapis.com",
  "path": "/gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}",
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
      "emailAddress": "emailAddress"
    },
    "body": {
      "emailAddress": "b_emailAddress",
      "primaryKeyPairId": "primaryKeyPairId",
      "signAndEncryptKeyPairs": "signAndEncryptKeyPairs"
    }
  },
  inputParamsSchema
}

export default tool