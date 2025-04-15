import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_api_keys_id_",
  "toolDescription": "Update Api Keys",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/api-keys/{id}",
  "method": "put",
  "security": [
    {
      "key": "x-portkey-api-key",
      "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_PORTKEY_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "rate_limits": "rate_limits",
      "usage_limits": "usage_limits",
      "scopes": "scopes",
      "defaults": "defaults",
      "alert_emails": "alert_emails"
    }
  },
  inputParamsSchema
}

export default tool