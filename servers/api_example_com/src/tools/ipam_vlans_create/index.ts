import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_vlans_create",
  "toolDescription": "Post a list of VLAN objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/vlans/",
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
      "site": "site",
      "group": "group",
      "vid": "vid",
      "name": "name",
      "tenant": "tenant",
      "status": "status",
      "role": "role",
      "description": "description",
      "qinq_role": "qinq_role",
      "qinq_svlan": "qinq_svlan",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool