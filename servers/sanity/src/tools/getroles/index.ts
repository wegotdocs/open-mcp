import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getroles",
  "toolDescription": "List roles assignable to a user on this resource.",
  "baseUrl": "https://api.sanity.io",
  "path": "/vX/access/{resourceType}/{resourceId}/roles",
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
      "limit": "limit",
      "includeImpliedRoles": "includeImpliedRoles"
    }
  },
  inputParamsSchema
}

export default tool