import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getentitiesbyquery",
  "toolDescription": "Search for entities by a given query.",
  "baseUrl": "https://stonehenge.stepstone.tools/api/catalog",
  "path": "/entities/by-query",
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
      "offset": "offset",
      "orderField": "orderField",
      "cursor": "cursor",
      "filter": "filter",
      "fullTextFilterTerm": "fullTextFilterTerm",
      "fullTextFilterFields": "fullTextFilterFields"
    }
  },
  inputParamsSchema
}

export default tool