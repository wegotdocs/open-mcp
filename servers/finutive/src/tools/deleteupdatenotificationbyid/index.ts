import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteupdatenotificationbyid",
  "toolDescription": "Delete notification by id",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/update-notifications/{notification_id}",
  "method": "delete",
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