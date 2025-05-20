import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_ip_addresses_create",
  "toolDescription": "Post a list of IP address objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/ip-addresses/",
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
      "address": "address",
      "vrf": "vrf",
      "tenant": "tenant",
      "status": "status",
      "role": "role",
      "assigned_object_type": "assigned_object_type",
      "assigned_object_id": "assigned_object_id",
      "nat_inside": "nat_inside",
      "dns_name": "dns_name",
      "description": "description",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool