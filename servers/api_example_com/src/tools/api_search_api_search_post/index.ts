import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_search_api_search_post",
  "toolDescription": "🔍 Search information about a user from an email address or a phone number.",
  "baseUrl": "https://api.example.com",
  "path": "/api/search",
  "method": "post",
  "security": [
    {
      "key": "x-api-key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "query": "query",
      "query_type": "query_type",
      "networks": "networks"
    }
  },
  inputParamsSchema
}

export default tool