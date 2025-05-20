import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_cable_terminations_update",
  "toolDescription": "Put a cable termination object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/cable-terminations/{id}/",
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
      "cable": "cable",
      "cable_end": "cable_end",
      "termination_type": "termination_type",
      "termination_id": "termination_id"
    }
  },
  inputParamsSchema
}

export default tool