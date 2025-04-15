import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "vpcpeerings_list",
  "toolDescription": "List All VPC Peerings",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/vpc_peerings",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "per_page": "per_page",
      "page": "page",
      "region": "region"
    }
  },
  inputParamsSchema
}

export default tool