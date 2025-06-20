import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_projects",
  "toolDescription": "Retrieve projects",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/projects",
  "method": "get",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool