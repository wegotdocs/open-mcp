import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "circuits_circuits_update",
  "toolDescription": "Put a circuit object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/circuits/circuits/{id}/",
  "method": "put",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "cid": "cid",
      "provider": "provider",
      "provider_account": "provider_account",
      "type": "type",
      "status": "status",
      "tenant": "tenant",
      "install_date": "install_date",
      "termination_date": "termination_date",
      "commit_rate": "commit_rate",
      "description": "description",
      "distance": "distance",
      "distance_unit": "distance_unit",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields",
      "assignments": "assignments"
    }
  },
  inputParamsSchema
}

export default tool