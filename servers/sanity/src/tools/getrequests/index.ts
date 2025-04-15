import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrequests",
  "toolDescription": "List all requests for given project/organization.",
  "baseUrl": "https://api.sanity.io",
  "path": "/v2024-07-01/access/{resourceType}/{resourceId}/requests",
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
      "includeChildren": "includeChildren"
    }
  },
  inputParamsSchema
}

export default tool