import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "v1_projects_instances_metrics_storage_retentions_update",
  "toolDescription": "Update metric update retention time.",
  "baseUrl": "https://argus.api.eu01.stackit.cloud",
  "path": "/v1/projects/{projectId}/instances/{instanceId}/metrics-storage-retentions",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "instanceId": "instanceId",
      "projectId": "projectId"
    },
    "body": {
      "metricsRetentionTime1h": "metricsRetentionTime1h",
      "metricsRetentionTime5m": "metricsRetentionTime5m",
      "metricsRetentionTimeRaw": "metricsRetentionTimeRaw"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool