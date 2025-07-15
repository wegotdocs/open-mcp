import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_create_webhook",
  "toolDescription": "Criar Webhook",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/webhooks",
  "method": "post",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "event_type": "event_type",
      "http_method": "http_method",
      "url": "url"
    }
  },
  inputParamsSchema
}

export default tool