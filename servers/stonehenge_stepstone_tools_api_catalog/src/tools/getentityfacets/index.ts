import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getentityfacets",
  "toolDescription": "Get all entity facets that match the given filters.",
  "baseUrl": "https://stonehenge.stepstone.tools/api/catalog",
  "path": "/entity-facets",
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
      "facet": "facet",
      "filter": "filter"
    }
  },
  inputParamsSchema
}

export default tool