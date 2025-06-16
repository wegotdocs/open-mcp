import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_load_balancer_types",
  "toolDescription": "Get all Load Balancer Types",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/load_balancer_types",
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
      "name": "name",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool