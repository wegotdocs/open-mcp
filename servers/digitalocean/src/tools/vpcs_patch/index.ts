import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "vpcs_patch",
  "toolDescription": "Partially Update a VPC",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/vpcs/{vpc_id}",
  "method": "patch",
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
    }
  },
  inputParamsSchema
}

export default tool