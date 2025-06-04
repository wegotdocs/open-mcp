import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listprojects",
  "toolDescription": "List projects",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/projects",
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
      "id": "id",
      "page": "page",
      "limit": "limit",
      "orderBy": "orderBy"
    }
  },
  inputParamsSchema
}

export default tool