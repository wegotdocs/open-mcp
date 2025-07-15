import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addstatus",
  "toolDescription": "Add a new status",
  "baseUrl": "https://api.float.com/v3",
  "path": "/status",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "status_id": "status_id",
      "status_type_id": "status_type_id",
      "people_id": "people_id",
      "status_name": "status_name",
      "start_date": "start_date",
      "end_date": "end_date",
      "repeat_state": "repeat_state",
      "repeat_end_date": "repeat_end_date",
      "created": "created",
      "modified": "modified",
      "created_by": "created_by",
      "modified_by": "modified_by"
    }
  },
  inputParamsSchema
}

export default tool