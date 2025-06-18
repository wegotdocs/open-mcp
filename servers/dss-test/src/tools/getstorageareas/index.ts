import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getstorageareas",
  "toolDescription": "List storage areas",
  "baseUrl": "{scheme}://{baseHost}",
  "path": "/api/v1/storage-areas",
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
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool