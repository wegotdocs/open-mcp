import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getholiday",
  "toolDescription": "Retrieve a single team holiday",
  "baseUrl": "https://api.float.com/v3",
  "path": "/holidays/{holiday_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "holiday_id": "holiday_id"
    }
  },
  inputParamsSchema
}

export default tool