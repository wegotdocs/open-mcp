import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateaccountssoconfig",
  "toolDescription": "Modifies or updates an AccountSSOConfig object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/AccountSSOConfig/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "accountId": "accountId",
      "assertionEncryption": "assertionEncryption",
      "authnContext": "authnContext",
      "authnContextComparison": "authnContextComparison",
      "certInfo": "certInfo",
      "certificate": "certificate",
      "enabled": "enabled",
      "fedIdFromNameId": "fedIdFromNameId",
      "idpUrl": "idpUrl",
      "nameIdPolicy": "nameIdPolicy",
      "signoutRedirectUrl": "signoutRedirectUrl"
    }
  },
  inputParamsSchema
}

export default tool