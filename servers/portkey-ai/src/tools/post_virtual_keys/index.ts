import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_virtual_keys",
  "toolDescription": "Create a Virtual Key",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/virtual-keys",
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
    "body": {
      "name": "name",
      "provider": "provider",
      "key": "key",
      "note": "note",
      "apiVersion": "apiVersion",
      "resourceName": "resourceName",
      "deploymentName": "deploymentName",
      "workspace_id": "workspace_id",
      "deploymentConfig": "deploymentConfig",
      "usage_limits": "usage_limits",
      "rate_limits": "rate_limits"
    }
  },
  inputParamsSchema
}

export default tool