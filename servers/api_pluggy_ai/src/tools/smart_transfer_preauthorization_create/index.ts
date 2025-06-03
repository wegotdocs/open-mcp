import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "smart_transfer_preauthorization_create",
  "toolDescription": "Create preauthorization",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/smart-transfers/preauthorizations",
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
      "recipientIds": "recipientIds",
      "callbackUrls": "callbackUrls",
      "clientPreauthorizationId": "clientPreauthorizationId"
    }
  },
  inputParamsSchema
}

export default tool