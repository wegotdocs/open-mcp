import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addtimeoff",
  "toolDescription": "Add a new time off, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/timeoffs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "timeoff_id": "timeoff_id",
      "timeoff_type_id": "timeoff_type_id",
      "start_date": "start_date",
      "end_date": "end_date",
      "start_time": "start_time",
      "hours": "hours",
      "timeoff_notes": "timeoff_notes",
      "repeat_state": "repeat_state",
      "status": "status",
      "repeat_end": "repeat_end",
      "full_day": "full_day",
      "people_ids": "people_ids",
      "created": "created",
      "modified": "modified",
      "modified_by": "modified_by",
      "created_by": "created_by"
    }
  },
  inputParamsSchema
}

export default tool