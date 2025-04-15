import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_workspaces_movedirector",
  "toolDescription": "Moves a directory (inside a Workspace), and all of its contents, to a new location.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{workspace}:moveDirectory",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
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
      "workspace": "workspace"
    },
    "body": {
      "newPath": "newPath",
      "path": "path"
    }
  },
  inputParamsSchema
}

export default tool