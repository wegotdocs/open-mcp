import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojecttemplates",
  "toolDescription": "Get multiple project templates",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/project_templates",
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
      "workspace": "workspace",
      "team": "team",
      "limit": "limit",
      "offset": "offset",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool