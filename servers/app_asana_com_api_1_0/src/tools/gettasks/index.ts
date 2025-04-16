import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettasks",
  "toolDescription": "Get multiple tasks",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/tasks",
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
      "assignee": "assignee",
      "project": "project",
      "section": "section",
      "workspace": "workspace",
      "completed_since": "completed_since",
      "modified_since": "modified_since",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool