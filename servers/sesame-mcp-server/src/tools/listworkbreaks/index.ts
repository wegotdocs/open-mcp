import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listworkbreaks",
  "toolDescription": "List Work Breaks",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/work-breaks",
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
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool