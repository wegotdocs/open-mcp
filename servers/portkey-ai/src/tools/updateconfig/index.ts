import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateconfig",
  "toolDescription": "Update a config",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/configs/{slug}",
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
      "config": "config",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool