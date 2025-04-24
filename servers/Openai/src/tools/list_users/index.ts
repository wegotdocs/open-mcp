import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_users",
  "toolDescription": "Lists all of the users in the organization.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/users",
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
      "limit": "limit",
      "after": "after",
      "emails": "emails"
    }
  },
  inputParamsSchema
}

export default tool