import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "performance_types_list",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/performance-types/",
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
      "page_no": "page_no",
      "page_size": "page_size",
      "status": "status",
      "team": "team"
    }
  },
  inputParamsSchema
}

export default tool