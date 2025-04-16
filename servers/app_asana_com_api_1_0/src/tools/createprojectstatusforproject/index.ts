import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createprojectstatusforproject",
  "toolDescription": "Create a project status",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/projects/{project_gid}/project_statuses",
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