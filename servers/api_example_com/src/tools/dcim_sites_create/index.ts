import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dcim_sites_create",
  "toolDescription": "Post a list of site objects.",
  "baseUrl": "https://api.example.com",
  "path": "/api/dcim/sites/",
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
      "status": "status",
      "region": "region",
      "group": "group",
      "tenant": "tenant",
      "facility": "facility",
      "time_zone": "time_zone",
      "description": "description",
      "physical_address": "physical_address",
      "shipping_address": "shipping_address",
      "latitude": "latitude",
      "longitude": "longitude",
      "comments": "comments",
      "asns": "asns",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool