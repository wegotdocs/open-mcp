import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "v1_projects_instances_alertgroups_update_all",
  "toolDescription": "Update alert groups.",
  "baseUrl": "https://argus.api.eu01.stackit.cloud",
  "path": "/v1/projects/{projectId}/instances/{instanceId}/alertgroups",
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
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool