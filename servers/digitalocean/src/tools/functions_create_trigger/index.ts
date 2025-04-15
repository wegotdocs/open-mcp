import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "functions_create_trigger",
  "toolDescription": "Create Trigger",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/functions/namespaces/{namespace_id}/triggers",
  "method": "post",
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
      "namespace_id": "namespace_id"
    },
    "body": {
      "name": "name",
      "function": "function",
      "type": "type",
      "is_enabled": "is_enabled",
      "scheduled_details": "scheduled_details"
    }
  },
  inputParamsSchema
}

export default tool