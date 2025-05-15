import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateenvironmentextensions",
  "toolDescription": "Modifies or updates an EnvironmentExtensions object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/EnvironmentExtensions/{id}",
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
      "PGPCertificates": "PGPCertificates",
      "connections": "connections",
      "crossReferences": "crossReferences",
      "environmentId": "environmentId",
      "extensionGroupId": "extensionGroupId",
      "id": "b_id",
      "operations": "operations",
      "partial": "partial",
      "processProperties": "processProperties",
      "properties": "properties",
      "sharedCommunications": "sharedCommunications",
      "tradingPartners": "tradingPartners"
    }
  },
  inputParamsSchema
}

export default tool