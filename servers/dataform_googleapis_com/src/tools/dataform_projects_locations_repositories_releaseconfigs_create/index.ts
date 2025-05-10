import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_releaseconfigs_create",
  "toolDescription": "Creates a new ReleaseConfig in a given Repository.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{parent}/releaseConfigs",
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
      "releaseConfigId": "releaseConfigId"
    },
    "body": {
      "codeCompilationConfig": "codeCompilationConfig",
      "cronSchedule": "cronSchedule",
      "gitCommitish": "gitCommitish",
      "name": "name",
      "recentScheduledReleaseRecords": "recentScheduledReleaseRecords",
      "releaseCompilationResult": "releaseCompilationResult",
      "timeZone": "timeZone"
    }
  },
  inputParamsSchema
}

export default tool