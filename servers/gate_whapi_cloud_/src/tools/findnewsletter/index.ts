import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findnewsletter",
  "toolDescription": "Find newsletters by filters",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/newsletters/find",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "country_code": "country_code",
      "search": "search",
      "newsletter_field": "newsletter_field",
      "cursor": "cursor",
      "count": "count",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool