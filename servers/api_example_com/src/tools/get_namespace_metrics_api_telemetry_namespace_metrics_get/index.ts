import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespace_metrics_api_telemetry_namespace_metrics_get",
  "toolDescription": "Get Namespace Metrics",
  "baseUrl": "https://api.example.com",
  "path": "/api/telemetry/{namespace}/metrics",
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