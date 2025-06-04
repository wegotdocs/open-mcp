import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listtimeentries",
  "toolDescription": "List Time Entries",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/time-entries",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "employeeId": "employeeId",
      "from": "from",
      "to": "to",
      "employeeStatus": "employeeStatus",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool