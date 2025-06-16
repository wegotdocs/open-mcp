import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_volumes",
  "toolDescription": "Get all Volumes",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/volumes",
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
      "status": "status",
      "sort": "sort",
      "name": "name",
      "label_selector": "label_selector",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool