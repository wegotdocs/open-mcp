import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getaudits",
  "toolDescription": "Get audit logs",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/audits",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "timePeriod": "timePeriod"
    }
  },
  inputParamsSchema
}

export default tool