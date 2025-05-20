import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_prefixes_create",
  "toolDescription": "Post a list of prefix objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/prefixes/",
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
      "prefix": "prefix",
      "vrf": "vrf",
      "scope_type": "scope_type",
      "scope_id": "scope_id",
      "tenant": "tenant",
      "vlan": "vlan",
      "status": "status",
      "role": "role",
      "is_pool": "is_pool",
      "mark_utilized": "mark_utilized",
      "description": "description",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool