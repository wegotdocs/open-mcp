import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrobots",
  "toolDescription": "Get robots with access to this resource",
  "baseUrl": "https://api.sanity.io",
  "path": "/vX/access/{resourceType}/{resourceId}/robots",
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
      "resourceType": "resourceType",
      "resourceId": "resourceId"
    },
    "query": {
      "includeChildren": "includeChildren",
      "nextCursor": "nextCursor",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool