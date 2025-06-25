import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listusers",
  "toolDescription": "List Users",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/users",
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
      "sort_order": "sort_order",
      "sort_property": "sort_property"
    }
  },
  inputParamsSchema
}

export default tool