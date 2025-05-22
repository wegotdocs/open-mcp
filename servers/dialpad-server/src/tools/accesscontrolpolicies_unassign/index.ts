import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accesscontrolpolicies_unassign",
  "toolDescription": "Access Control Policies -- Unassign",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/accesscontrolpolicies/{id}/unassign",
  "method": "post",
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
      "target_id": "target_id",
      "target_type": "target_type",
      "unassign_all": "unassign_all",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool