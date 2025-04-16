import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_create",
  "toolDescription": "Creates a new Repository in a given project and location.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{parent}/repositories",
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
      "parent": "parent"
    },
    "query": {
      "repositoryId": "repositoryId"
    },
    "body": {
      "gitRemoteSettings": "gitRemoteSettings",
      "name": "name",
      "npmrcEnvironmentVariablesSecretVersion": "npmrcEnvironmentVariablesSecretVersion",
      "workspaceCompilationOverrides": "workspaceCompilationOverrides"
    }
  },
  inputParamsSchema
}

export default tool