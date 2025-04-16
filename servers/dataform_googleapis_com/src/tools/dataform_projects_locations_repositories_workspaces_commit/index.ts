import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_workspaces_commit",
  "toolDescription": "Applies a Git commit for uncommitted files in a Workspace.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{name}:commit",
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
      "name": "name"
    },
    "body": {
      "author": "author",
      "commitMessage": "commitMessage",
      "paths": "paths"
    }
  },
  inputParamsSchema
}

export default tool