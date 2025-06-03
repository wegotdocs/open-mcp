import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putupdatenotificationbusiness",
  "toolDescription": "Add or remove business for a notification",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/update-notifications/{notification_id}",
  "method": "put",
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
    "body": {
      "name": "name",
      "title": "title",
      "description": "description",
      "button_text": "button_text",
      "link": "link",
      "expires": "expires",
      "active_until": "active_until",
      "visible_since": "visible_since",
      "all_businesses": "all_businesses",
      "businesses": "businesses"
    }
  },
  inputParamsSchema
}

export default tool