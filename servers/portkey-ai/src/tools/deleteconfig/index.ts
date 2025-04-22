import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteconfig",
  "toolDescription": "Delete a config",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/configs/{slug}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool