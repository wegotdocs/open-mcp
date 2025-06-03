import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postupdatenotification",
  "toolDescription": "Create a new notification",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/update-notifications",
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