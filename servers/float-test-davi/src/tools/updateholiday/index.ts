import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateholiday",
  "toolDescription": "Update a holiday's details, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/holidays/{holiday_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "holiday_id": "holiday_id"
    }
  },
  inputParamsSchema
}

export default tool