import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accesscontrolpolicies_update",
  "toolDescription": "Access Control Policies -- Update",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/accesscontrolpolicies/{id}",
  "method": "patch",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "description": "description",
      "name": "name",
      "permission_sets": "permission_sets",
      "state": "state",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool