import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dataform_projects_locations_repositories_workflowconfigs_create",
  "toolDescription": "Creates a new WorkflowConfig in a given Repository.",
  "baseUrl": "https://dataform.googleapis.com",
  "path": "/v1beta1/{parent}/workflowConfigs",
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
      "workflowConfigId": "workflowConfigId"
    },
    "body": {
      "cronSchedule": "cronSchedule",
      "invocationConfig": "invocationConfig",
      "name": "name",
      "recentScheduledExecutionRecords": "recentScheduledExecutionRecords",
      "releaseConfig": "releaseConfig",
      "timeZone": "timeZone"
    }
  },
  inputParamsSchema
}

export default tool