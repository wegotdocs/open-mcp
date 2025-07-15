import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletetimeoff",
  "toolDescription": "Delete a time off record",
  "baseUrl": "https://api.float.com/v3",
  "path": "/timeoffs/{timeoff_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "timeoff_id": "timeoff_id"
    }
  },
  inputParamsSchema
}

export default tool