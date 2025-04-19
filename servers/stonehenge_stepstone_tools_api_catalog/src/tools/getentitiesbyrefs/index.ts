import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getentitiesbyrefs",
  "toolDescription": "Get a batch set of entities given an array of entityRefs.",
  "baseUrl": "https://stonehenge.stepstone.tools/api/catalog",
  "path": "/entities/by-refs",
  "method": "post",
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
      "filter": "filter"
    },
    "body": {
      "entityRefs": "entityRefs",
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool