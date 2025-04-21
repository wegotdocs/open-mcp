import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getentities",
  "toolDescription": "Get all entities matching a given filter.",
  "baseUrl": "https://api.example.com",
  "path": "/entities",
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
      "fields": "fields",
      "limit": "limit",
      "filter": "filter",
      "offset": "offset",
      "after": "after",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool