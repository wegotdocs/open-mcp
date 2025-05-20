import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_fhrp_group_assignments_partial_update",
  "toolDescription": "Patch a FHRP group assignment object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/fhrp-group-assignments/{id}/",
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
      "group": "group",
      "interface_type": "interface_type",
      "interface_id": "interface_id",
      "priority": "priority"
    }
  },
  inputParamsSchema
}

export default tool