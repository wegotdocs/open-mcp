import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_workspaces_pull",
  "toolDescription": "Pulls Git commits from the Repository's remote into a Workspace.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{name}:pull",
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
      "remoteBranch": "remoteBranch"
    }
  },
  inputParamsSchema
}

export default tool