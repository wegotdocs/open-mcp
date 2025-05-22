import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accesscontrolpolicies_create",
  "toolDescription": "Access Control Policies -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/accesscontrolpolicies",
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
    "body": {
      "description": "description",
      "name": "name",
      "owner_id": "owner_id",
      "permission_sets": "permission_sets",
      "target_type": "target_type"
    }
  },
  inputParamsSchema
}

export default tool