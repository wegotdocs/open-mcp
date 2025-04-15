import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "acceptrequest",
  "toolDescription": "Accept request",
  "baseUrl": "https://api.sanity.io",
  "path": "/v2024-07-01/access/{resourceType}/{resourceId}/requests/{requestId}/accept",
  "method": "put",
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
      "requestId": "requestId"
    },
    "body": {
      "roleNames": "roleNames"
    }
  },
  inputParamsSchema
}

export default tool