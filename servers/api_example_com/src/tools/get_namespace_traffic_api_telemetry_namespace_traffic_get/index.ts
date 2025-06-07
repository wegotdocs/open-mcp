import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespace_traffic_api_telemetry_namespace_traffic_get",
  "toolDescription": "Get Namespace Traffic",
  "baseUrl": "https://api.example.com",
  "path": "/api/telemetry/{namespace}/traffic",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "duration": "duration"
    }
  },
  inputParamsSchema
}

export default tool