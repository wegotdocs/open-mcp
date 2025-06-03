import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "v1_projects_instances_http_checks_create",
  "toolDescription": "Create http check.",
  "baseUrl": "https://argus.api.eu01.stackit.cloud",
  "path": "/v1/projects/{projectId}/instances/{instanceId}/http-checks",
  "method": "post",
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
      "url": "url"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool