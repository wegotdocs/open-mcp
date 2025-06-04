import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listoffices",
  "toolDescription": "List offices",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/core/v3/offices",
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
      "limit": "limit",
      "page": "page",
      "orderBy": "orderBy"
    }
  },
  inputParamsSchema
}

export default tool