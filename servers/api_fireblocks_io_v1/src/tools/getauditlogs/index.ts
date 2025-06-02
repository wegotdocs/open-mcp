import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getauditlogs",
  "toolDescription": "Get audit logs",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/audit_logs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "timePeriod": "timePeriod",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool