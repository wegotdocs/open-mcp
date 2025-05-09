import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmypermissions",
  "toolDescription": "Get current user permissions.",
  "baseUrl": "https://api.sanity.io",
  "path": "/vX/access/permissions/me",
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
      "nextCursor": "nextCursor",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool