import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_compilationresults_crea",
  "toolDescription": "Creates a new CompilationResult in a given project and location.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{parent}/compilationResults",
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
    "body": {
      "codeCompilationConfig": "codeCompilationConfig",
      "compilationErrors": "compilationErrors",
      "dataformCoreVersion": "dataformCoreVersion",
      "gitCommitish": "gitCommitish",
      "name": "name",
      "releaseConfig": "releaseConfig",
      "resolvedGitCommitSha": "resolvedGitCommitSha",
      "workspace": "workspace"
    }
  },
  inputParamsSchema
}

export default tool