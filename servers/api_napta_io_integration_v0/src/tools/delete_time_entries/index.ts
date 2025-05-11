import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_time_entries",
  "toolDescription": "Delete time entries",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/time_entries",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "user.napta_id": "user.napta_id",
      "user.external_id": "user.external_id",
      "project.napta_id": "project.napta_id",
      "project.external_id": "project.external_id"
    }
  },
  inputParamsSchema
}

export default tool