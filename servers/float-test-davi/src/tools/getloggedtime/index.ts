import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getloggedtime",
  "toolDescription": "Retrieve a single logged time entry.",
  "baseUrl": "https://api.float.com/v3",
  "path": "/logged-time/{logged_time_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "logged_time_id": "logged_time_id"
    }
  },
  inputParamsSchema
}

export default tool