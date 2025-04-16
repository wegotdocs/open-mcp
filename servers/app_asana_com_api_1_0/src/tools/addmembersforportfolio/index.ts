import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addmembersforportfolio",
  "toolDescription": "Add users to a portfolio",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/portfolios/{portfolio_gid}/addMembers",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "opt_fields": "opt_fields"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool