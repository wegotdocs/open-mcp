import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "circuits_circuit_terminations_update",
  "toolDescription": "Put a circuit termination object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/circuits/circuit-terminations/{id}/",
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
      "circuit": "circuit",
      "term_side": "term_side",
      "termination_type": "termination_type",
      "termination_id": "termination_id",
      "port_speed": "port_speed",
      "upstream_speed": "upstream_speed",
      "xconnect_id": "xconnect_id",
      "pp_info": "pp_info",
      "description": "description",
      "mark_connected": "mark_connected",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool