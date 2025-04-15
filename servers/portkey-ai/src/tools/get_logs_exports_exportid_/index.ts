import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_logs_exports_exportid_",
  "toolDescription": "Get a specific logs export",
  "baseUrl": "https://api.portkey.ai/v1",
  "path": "/logs/exports/{exportId}",
  "method": "get",
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
      "exportId": "exportId"
    }
  },
  inputParamsSchema
}

export default tool