import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putwebhook",
  "toolDescription": "Update a webhook",
  "baseUrl": "https://api.figma.com",
  "path": "/v2/webhooks/{webhook_id}",
  "method": "put",
  "security": [
    {
      "key": "X-Figma-Token",
      "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_FIGMA_TOKEN"
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
      "webhook_id": "webhook_id"
    },
    "body": {
      "event_type": "event_type",
      "endpoint": "endpoint",
      "passcode": "passcode",
      "status": "status",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool