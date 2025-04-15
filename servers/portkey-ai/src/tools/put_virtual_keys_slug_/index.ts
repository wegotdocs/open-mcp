import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_virtual_keys_slug_",
  "toolDescription": "Update a Virtual Key",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/virtual-keys/{slug}",
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
      "slug": "slug"
    },
    "body": {
      "name": "name",
      "key": "key",
      "note": "note",
      "deploymentConfig": "deploymentConfig",
      "usage_limits": "usage_limits"
    }
  },
  inputParamsSchema
}

export default tool