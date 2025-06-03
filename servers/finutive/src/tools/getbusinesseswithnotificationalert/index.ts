import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbusinesseswithnotificationalert",
  "toolDescription": "get initiatives which has the notification alert",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/update-notifications/businesses",
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
      "search": "search",
      "page": "page",
      "size": "size"
    }
  },
  inputParamsSchema
}

export default tool