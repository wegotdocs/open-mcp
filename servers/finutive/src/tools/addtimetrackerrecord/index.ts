import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addtimetrackerrecord",
  "toolDescription": "Add a finished timetracker record for specific user",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/timetracker/record",
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
      "start_date": "start_date",
      "end_date": "end_date",
      "manager_id": "manager_id",
      "business_id": "business_id",
      "service_id": "service_id",
      "type_of_register": "type_of_register",
      "manager_helped_id": "manager_helped_id",
      "is_edited": "is_edited",
      "reason_edited": "reason_edited",
      "delete": "delete",
      "sub_item_id": "sub_item_id"
    }
  },
  inputParamsSchema
}

export default tool