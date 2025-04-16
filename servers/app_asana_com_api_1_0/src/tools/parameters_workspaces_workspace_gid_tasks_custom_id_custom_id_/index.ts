import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_workspaces_workspace_gid_tasks_custom_id_custom_id_",
  "toolDescription": "",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/workspaces/{workspace_gid}/tasks/custom_id/{custom_id}",
  "method": "parameters",
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
  "paramsMap": {},
  inputParamsSchema
}

export default tool