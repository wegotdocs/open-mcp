import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "operations_turnover",
  "toolDescription": "ბრუნვა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/transactions/turnover",
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
    "path": {
      "language": "language"
    },
    "query": {
      "date_from": "date_from",
      "date_to": "date_to",
      "parent_id": "parent_id"
    }
  },
  inputParamsSchema
}

export default tool