import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuser",
  "toolDescription": "Get user and roles.",
  "baseUrl": "https://api.sanity.io",
  "path": "/vX/access/{resourceType}/{resourceId}/users/{sanityUserId}",
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
      "resourceId": "resourceId",
      "sanityUserId": "sanityUserId"
    },
    "query": {
      "includeImpliedRoles": "includeImpliedRoles"
    }
  },
  inputParamsSchema
}

export default tool