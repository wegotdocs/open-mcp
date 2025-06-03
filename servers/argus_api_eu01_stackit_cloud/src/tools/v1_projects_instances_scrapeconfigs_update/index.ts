import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "v1_projects_instances_scrapeconfigs_update",
  "toolDescription": "Update scrape config.",
  "baseUrl": "https://argus.api.eu01.stackit.cloud",
  "path": "/v1/projects/{projectId}/instances/{instanceId}/scrapeconfigs/{jobName}",
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
      "jobName": "jobName",
      "projectId": "projectId"
    },
    "body": {
      "basicAuth": "basicAuth",
      "bearerToken": "bearerToken",
      "honorLabels": "honorLabels",
      "honorTimeStamps": "honorTimeStamps",
      "metricsPath": "metricsPath",
      "metricsRelabelConfigs": "metricsRelabelConfigs",
      "params": "params",
      "sampleLimit": "sampleLimit",
      "scheme": "scheme",
      "scrapeInterval": "scrapeInterval",
      "scrapeTimeout": "scrapeTimeout",
      "staticConfigs": "staticConfigs",
      "tlsConfig": "tlsConfig"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool