import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportmanagers",
  "toolDescription": "Export managers information",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/admin/managers/export",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "managers_id": "managers_id"
    }
  },
  inputParamsSchema
}

export default tool