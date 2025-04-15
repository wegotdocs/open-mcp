import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateendpoint",
  "toolDescription": "Update endpoint, this can also be used to start or stop a dedicated endpoint",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/endpoints/{endpointId}",
  "method": "patch",
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
      "endpointId": "endpointId"
    },
    "body": {
      "display_name": "display_name",
      "state": "state",
      "autoscaling": "autoscaling",
      "inactive_timeout": "inactive_timeout"
    }
  },
  inputParamsSchema
}

export default tool