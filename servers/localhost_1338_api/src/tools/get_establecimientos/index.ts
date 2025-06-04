import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_establecimientos",
  "toolDescription": "",
  "baseUrl": "http://localhost:1338/api",
  "path": "/establecimientos",
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
      "pagination[withCount]": "pagination[withCount]",
      "pagination[page]": "pagination[page]",
      "pagination[pageSize]": "pagination[pageSize]",
      "pagination[start]": "pagination[start]",
      "pagination[limit]": "pagination[limit]",
      "fields": "fields",
      "populate": "populate",
      "filters": "filters",
      "locale": "locale"
    }
  },
  inputParamsSchema
}

export default tool