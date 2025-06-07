import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_telemetry_traffic_api_telemetry_environment_traffic_get",
  "toolDescription": "Get Telemetry Traffic",
  "baseUrl": "https://api.example.com",
  "path": "/api/telemetry/{environment}/traffic",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment": "environment"
    },
    "query": {
      "duration": "duration"
    }
  },
  inputParamsSchema
}

export default tool