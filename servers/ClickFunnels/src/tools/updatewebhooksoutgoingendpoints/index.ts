import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatewebhooksoutgoingendpoints",
  "toolDescription": "Update Endpoint",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/webhooks/outgoing/endpoints/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "webhooks_outgoing_endpoint": "webhooks_outgoing_endpoint"
    }
  },
  inputParamsSchema
}

export default tool