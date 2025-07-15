import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addtimeofftype",
  "toolDescription": "Add a new time off type, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/timeoff-types",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "timeoff_type_id": "timeoff_type_id",
      "timeoff_type_name": "timeoff_type_name",
      "color": "color",
      "active": "active",
      "created_by": "created_by"
    }
  },
  inputParamsSchema
}

export default tool