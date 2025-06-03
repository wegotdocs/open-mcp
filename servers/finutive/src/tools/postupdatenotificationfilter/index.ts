import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postupdatenotificationfilter",
  "toolDescription": "Create a new filter",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/update-notifications/filters",
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
      "id": "id",
      "update_notification": "update_notification",
      "name": "name",
      "active": "active",
      "filter_type": "filter_type",
      "filter_value": "filter_value",
      "extra_value": "extra_value"
    }
  },
  inputParamsSchema
}

export default tool