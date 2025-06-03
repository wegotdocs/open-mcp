import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getavatar",
  "toolDescription": "Get user avatar",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/users/{user_id}/avatar",
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
    "path": {
      "user_id": "user_id"
    },
    "query": {
      "inline": "inline"
    }
  },
  inputParamsSchema
}

export default tool