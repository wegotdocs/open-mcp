import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_images",
  "toolDescription": "Get all Images",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/images",
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
      "sort": "sort",
      "type": "type",
      "status": "status",
      "bound_to": "bound_to",
      "include_deprecated": "include_deprecated",
      "name": "name",
      "label_selector": "label_selector",
      "architecture": "architecture",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool