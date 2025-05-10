import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_workflowconfigs_patch",
  "toolDescription": "Updates a single WorkflowConfig.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{name}",
  "method": "patch",
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
    "query": {
      "updateMask": "updateMask"
    },
    "body": {
      "cronSchedule": "cronSchedule",
      "invocationConfig": "invocationConfig",
      "name": "b_name",
      "recentScheduledExecutionRecords": "recentScheduledExecutionRecords",
      "releaseConfig": "releaseConfig",
      "timeZone": "timeZone"
    }
  },
  inputParamsSchema
}

export default tool