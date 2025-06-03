import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "items_create",
  "toolDescription": "Create",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/items",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "connectorId": "connectorId",
      "parameters": "parameters",
      "webhookUrl": "webhookUrl",
      "clientUserId": "clientUserId",
      "oauthRedirectUri": "oauthRedirectUri",
      "products": "products",
      "avoidDuplicates": "avoidDuplicates"
    }
  },
  inputParamsSchema
}

export default tool