import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listchecktypes",
  "toolDescription": "List Check Types",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/check-types",
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