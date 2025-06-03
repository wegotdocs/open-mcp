import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setnotificationsasread",
  "toolDescription": "Mark notifications as read",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/notifications/set_as_read",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "body": {
      "ids": "ids",
      "all": "all"
    }
  },
  inputParamsSchema
}

export default tool