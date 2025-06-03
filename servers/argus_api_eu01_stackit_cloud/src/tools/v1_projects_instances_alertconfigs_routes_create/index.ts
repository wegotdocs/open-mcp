import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "v1_projects_instances_alertconfigs_routes_create",
  "toolDescription": "Create alert config route in routes of route.",
  "baseUrl": "https://argus.api.eu01.stackit.cloud",
  "path": "/v1/projects/{projectId}/instances/{instanceId}/alertconfigs/routes",
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
      "continue": "continue",
      "groupBy": "groupBy",
      "groupInterval": "groupInterval",
      "groupWait": "groupWait",
      "matchers": "matchers",
      "receiver": "receiver",
      "repeatInterval": "repeatInterval",
      "routes": "routes"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool