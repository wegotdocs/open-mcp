import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "admin_api_keys_list",
  "toolDescription": "List organization API keys",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/admin_api_keys",
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
      "after": "after",
      "order": "order",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool