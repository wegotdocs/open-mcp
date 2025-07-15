import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettimeoff",
  "toolDescription": "Retrieve a single time off",
  "baseUrl": "https://api.float.com/v3",
  "path": "/timeoffs/{timeoff_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "timeoff_id": "timeoff_id"
    }
  },
  inputParamsSchema
}

export default tool