import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusernotifications",
  "toolDescription": "Get user notifications",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/notifications",
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
      "offset": "offset",
      "size": "size",
      "read": "read"
    }
  },
  inputParamsSchema
}

export default tool