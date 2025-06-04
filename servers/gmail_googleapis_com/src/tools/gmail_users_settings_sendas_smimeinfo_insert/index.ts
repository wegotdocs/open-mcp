import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gmail_users_settings_sendas_smimeinfo_insert",
  "toolDescription": "Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.",
  "baseUrl": "https://gmail.googleapis.com",
  "path": "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo",
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
      "userId": "userId",
      "sendAsEmail": "sendAsEmail"
    },
    "body": {
      "encryptedKeyPassword": "encryptedKeyPassword",
      "expiration": "expiration",
      "id": "id",
      "isDefault": "isDefault",
      "issuerCn": "issuerCn",
      "pem": "pem",
      "pkcs12": "pkcs12"
    }
  },
  inputParamsSchema
}

export default tool