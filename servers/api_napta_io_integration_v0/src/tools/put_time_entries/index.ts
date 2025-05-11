import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_time_entries",
  "toolDescription": "Load a time entry",
  "baseUrl": "https://api.napta.io/integration/v0",
  "path": "/time_entries",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "date": "date",
      "user": "user",
      "project": "project",
      "workload": "workload"
    }
  },
  inputParamsSchema
}

export default tool