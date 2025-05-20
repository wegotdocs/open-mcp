import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ipam_ip_ranges_partial_update",
  "toolDescription": "Patch a IP range object.",
  "baseUrl": "https://api.example.com",
  "path": "/api/ipam/ip-ranges/{id}/",
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
      "start_address": "start_address",
      "end_address": "end_address",
      "vrf": "vrf",
      "tenant": "tenant",
      "status": "status",
      "role": "role",
      "description": "description",
      "comments": "comments",
      "tags": "tags",
      "custom_fields": "custom_fields",
      "mark_populated": "mark_populated",
      "mark_utilized": "mark_utilized"
    }
  },
  inputParamsSchema
}

export default tool