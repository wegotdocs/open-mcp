import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "starttimetracker",
  "toolDescription": "Start time tracking for logged in user",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/timetracker/start",
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
      "business_id": "business_id",
      "type_of_register": "type_of_register",
      "service_id": "service_id",
      "manager_helped_id": "manager_helped_id",
      "sub_item_id": "sub_item_id"
    }
  },
  inputParamsSchema
}

export default tool