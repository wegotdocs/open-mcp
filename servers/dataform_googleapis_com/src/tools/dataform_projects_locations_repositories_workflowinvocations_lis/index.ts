import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_workflowinvocations_lis",
  "toolDescription": "Lists WorkflowInvocations in a given Repository.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{parent}/workflowInvocations",
  "method": "get",
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
      "filter": "filter",
      "orderBy": "orderBy",
      "pageSize": "pageSize",
      "pageToken": "pageToken"
    }
  },
  inputParamsSchema
}

export default tool