import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_leaves",
  "toolDescription": "Delete a leave",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/leaves",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "starts_at_midday": "starts_at_midday",
      "ends_at_midday": "ends_at_midday",
      "user.napta_id": "user.napta_id",
      "user.external_id": "user.external_id"
    }
  },
  inputParamsSchema
}

export default tool