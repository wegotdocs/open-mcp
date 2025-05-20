import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_fhrp_group_assignments_create",
  "toolDescription": "Post a list of FHRP group assignment objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/fhrp-group-assignments/",
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
      "interface_type": "interface_type",
      "interface_id": "interface_id",
      "priority": "priority"
    }
  },
  inputParamsSchema
}

export default tool