import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "vpcs_create_peerings",
  "toolDescription": "Create a Peering with a VPC",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/vpcs/{vpc_id}/peerings",
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
    "path": {
      "vpc_id": "vpc_id"
    },
    "body": {
      "name": "name",
      "vpc_id": "b_vpc_id"
    }
  },
  inputParamsSchema
}

export default tool