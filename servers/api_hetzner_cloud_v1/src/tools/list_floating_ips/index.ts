import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_floating_ips",
  "toolDescription": "Get all Floating IPs",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/floating_ips",
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
      "label_selector": "label_selector",
      "sort": "sort",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool