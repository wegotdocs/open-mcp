import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addholiday",
  "toolDescription": "Create a team holiday that",
  "baseUrl": "https://api.float.com/v3",
  "path": "/holidays",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "holiday_id": "holiday_id",
      "name": "name",
      "date": "date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool