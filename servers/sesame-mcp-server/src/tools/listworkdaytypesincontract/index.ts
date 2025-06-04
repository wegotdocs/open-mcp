import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listworkdaytypesincontract",
  "toolDescription": "List workday types",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/contract/v1/workday-types",
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
      "name": "name",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool