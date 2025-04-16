import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojectsforworkspace",
  "toolDescription": "Get all projects in a workspace",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/workspaces/{workspace_gid}/projects",
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
      "archived": "archived",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool