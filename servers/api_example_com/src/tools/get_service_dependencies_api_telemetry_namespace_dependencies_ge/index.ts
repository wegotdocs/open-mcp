import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_service_dependencies_api_telemetry_namespace_dependencies_ge",
  "toolDescription": "Get Service Dependencies",
  "baseUrl": "https://api.example.com",
  "path": "/api/telemetry/{namespace}/dependencies",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    }
  },
  inputParamsSchema
}

export default tool