import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getupdatenotificationswithfilters",
  "toolDescription": "get update notifications with filters",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/update-notifications/filters",
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
      "updateNotificationId": "updateNotificationId",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool