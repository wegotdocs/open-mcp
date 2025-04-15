import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "monitoring_get_sink",
  "toolDescription": "Get Sink",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/monitoring/sinks/{sink_uuid}",
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
      "sink_uuid": "sink_uuid"
    }
  },
  inputParamsSchema
}

export default tool