import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configurewebhook",
  "toolDescription": "Update API Webhook configuration",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/webhook",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "url": "url",
      "activities": "activities",
      "expand": "expand",
      "headers": "headers"
    }
  },
  inputParamsSchema
}

export default tool