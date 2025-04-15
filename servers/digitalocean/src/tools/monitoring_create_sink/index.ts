import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_create_sink",
  "toolDescription": "Create Sink",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/sinks",
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
    "body": {
      "destination_uuid": "destination_uuid",
      "resources": "resources"
    }
  },
  inputParamsSchema
}

export default tool