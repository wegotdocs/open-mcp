import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postupdatenotificationsetclose",
  "toolDescription": "Close notification",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/update-notifications/close/{notification_id}",
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
    "path": {
      "notification_id": "notification_id"
    },
    "query": {
      "closeDate": "closeDate",
      "actualUser": "actualUser"
    }
  },
  inputParamsSchema
}

export default tool