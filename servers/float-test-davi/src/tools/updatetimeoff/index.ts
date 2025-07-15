import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetimeoff",
  "toolDescription": "Update a time off's details, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/timeoffs/{timeoff_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "timeoff_id": "timeoff_id"
    }
  },
  inputParamsSchema
}

export default tool