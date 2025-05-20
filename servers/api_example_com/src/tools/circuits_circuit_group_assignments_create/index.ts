import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "circuits_circuit_group_assignments_create",
  "toolDescription": "Post a list of Circuit group assignment objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/circuits/circuit-group-assignments/",
  "method": "post",
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