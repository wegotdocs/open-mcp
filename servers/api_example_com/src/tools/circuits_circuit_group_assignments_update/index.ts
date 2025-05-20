import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "circuits_circuit_group_assignments_update",
  "toolDescription": "Put a Circuit group assignment object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/circuits/circuit-group-assignments/{id}/",
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
      "group": "group",
      "member_type": "member_type",
      "member_id": "member_id",
      "priority": "priority",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool