import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_releaseconfigs_list",
  "toolDescription": "Lists ReleaseConfigs in a given Repository.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{parent}/releaseConfigs",
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
      "pageSize": "pageSize",
      "pageToken": "pageToken"
    }
  },
  inputParamsSchema
}

export default tool