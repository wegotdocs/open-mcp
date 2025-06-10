import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojectstatusesforproject",
  "toolDescription": "Get statuses from a project",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/projects/{project_gid}/project_statuses",
  "method": "get",
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
    "path": {
      "project_gid": "project_gid"
    },
    "query": {
      "opt_pretty": "opt_pretty",
      "limit": "limit",
      "offset": "offset",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool