import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "vpcpeerings_delete",
  "toolDescription": "Delete a VPC peering",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/vpc_peerings/{vpc_peering_id}",
  "method": "delete",
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
      "vpc_peering_id": "vpc_peering_id"
    }
  },
  inputParamsSchema
}

export default tool