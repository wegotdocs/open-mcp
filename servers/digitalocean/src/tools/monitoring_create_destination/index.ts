import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_create_destination",
  "toolDescription": "Create Logging Destination",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/sinks/destinations",
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
      "name": "name",
      "type": "type",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool