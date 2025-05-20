import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_vlan_groups_create",
  "toolDescription": "Post a list of VLAN group objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/vlan-groups/",
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
      "name": "name",
      "slug": "slug",
      "scope_type": "scope_type",
      "scope_id": "scope_id",
      "vid_ranges": "vid_ranges",
      "tenant": "tenant",
      "description": "description",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool