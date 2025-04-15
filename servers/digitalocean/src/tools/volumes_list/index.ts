import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "volumes_list",
  "toolDescription": "List All Block Storage Volumes",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/volumes",
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
      "region": "region",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool