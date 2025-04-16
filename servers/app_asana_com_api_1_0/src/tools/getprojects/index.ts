import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojects",
  "toolDescription": "Get multiple projects",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/projects",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "workspace": "workspace",
      "team": "team",
      "archived": "archived",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool