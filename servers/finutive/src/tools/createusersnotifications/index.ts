import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createusersnotifications",
  "toolDescription": "Create notification",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/notifications",
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
      "sendById": "sendById",
      "text": "text",
      "type": "type",
      "hash": "hash",
      "silentPush": "silentPush",
      "extraInfo": "extraInfo",
      "userIds": "userIds"
    }
  },
  inputParamsSchema
}

export default tool