import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteholiday",
  "toolDescription": "Delete a team holiday",
  "baseUrl": "https://api.float.com/v3",
  "path": "/holidays/{holiday_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "holiday_id": "holiday_id"
    }
  },
  inputParamsSchema
}

export default tool