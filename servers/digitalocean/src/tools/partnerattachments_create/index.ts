import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "partnerattachments_create",
  "toolDescription": "Create a new partner attachment",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/partner_network_connect/attachments",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "name": "name",
      "connection_bandwidth_in_mbps": "connection_bandwidth_in_mbps",
      "region": "region",
      "naas_provider": "naas_provider",
      "vpc_ids": "vpc_ids",
      "parent_uuid": "parent_uuid",
      "bgp": "bgp"
    }
  },
  inputParamsSchema
}

export default tool