import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrole",
  "toolDescription": "Get a role",
  "baseUrl": "https://api.sanity.io",
  "path": "/vX/access/{resourceType}/{resourceId}/roles/{roleName}",
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
      "roleName": "roleName"
    }
  },
  inputParamsSchema
}

export default tool