import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_api_key",
  "toolDescription": "Delete Api Key",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/keys/{key_prefix}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "key_prefix": "key_prefix"
    }
  },
  inputParamsSchema
}

export default tool