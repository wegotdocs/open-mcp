import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_get_destination",
  "toolDescription": "Get Logging Destination",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/sinks/destinations/{destination_uuid}",
  "method": "get",
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
      "destination_uuid": "destination_uuid"
    }
  },
  inputParamsSchema
}

export default tool