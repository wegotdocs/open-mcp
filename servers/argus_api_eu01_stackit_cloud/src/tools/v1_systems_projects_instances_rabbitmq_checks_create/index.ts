import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "v1_systems_projects_instances_rabbitmq_checks_create",
  "toolDescription": "Create rabbitmq check.",
  "baseUrl": "https://argus.api.eu01.stackit.cloud",
  "path": "/v1/systems/projects/{projectId}/instances/{instanceId}/rabbitmq-checks",
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
      "password": "password",
      "url": "url",
      "username": "username"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool