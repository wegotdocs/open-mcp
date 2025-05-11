import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_leaves",
  "toolDescription": "Load a leave",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/leaves",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "start_date": "start_date",
      "end_date": "end_date",
      "starts_at_midday": "starts_at_midday",
      "ends_at_midday": "ends_at_midday",
      "user": "user",
      "category": "category"
    }
  },
  inputParamsSchema
}

export default tool