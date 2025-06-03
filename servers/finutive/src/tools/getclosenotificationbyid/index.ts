import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getclosenotificationbyid",
  "toolDescription": "get close notification by id",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/update-notifications/close/{notification_id}",
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
      "notification_id": "notification_id"
    }
  },
  inputParamsSchema
}

export default tool