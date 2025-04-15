import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_keys_type_sub_type_",
  "toolDescription": "Create Api Keys",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/api-keys/{type}/{sub-type}",
  "method": "post",
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
      "type": "type",
      "sub-type": "sub-type"
    },
    "body": {
      "name": "name",
      "description": "description",
      "workspace_id": "workspace_id",
      "user_id": "user_id",
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