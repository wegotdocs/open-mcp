import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listfiles",
  "toolDescription": "Returns a list of files.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/files",
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
      "purpose": "purpose",
      "limit": "limit",
      "order": "order",
      "after": "after"
    }
  },
  inputParamsSchema
}

export default tool