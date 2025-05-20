import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_cables_partial_update",
  "toolDescription": "Patch a cable object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/cables/{id}/",
  "method": "patch",
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
      "type": "type",
      "a_terminations": "a_terminations",
      "b_terminations": "b_terminations",
      "status": "status",
      "tenant": "tenant",
      "label": "label",
      "color": "color",
      "length": "length",
      "length_unit": "length_unit",
      "description": "description",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool