import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "vpcs_list_members",
  "toolDescription": "List the Member Resources of a VPC",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/vpcs/{vpc_id}/members",
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
    "path": {
      "vpc_id": "vpc_id"
    },
    "query": {
      "resource_type": "resource_type",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool