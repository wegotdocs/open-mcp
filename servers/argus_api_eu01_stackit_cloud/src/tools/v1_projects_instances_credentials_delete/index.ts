import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "v1_projects_instances_credentials_delete",
  "toolDescription": "Delete technical credentials.",
  "baseUrl": "https://argus.api.eu01.stackit.cloud",
  "path": "/v1/projects/{projectId}/instances/{instanceId}/credentials/{username}",
  "method": "delete",
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
      "projectId": "projectId",
      "username": "username"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool