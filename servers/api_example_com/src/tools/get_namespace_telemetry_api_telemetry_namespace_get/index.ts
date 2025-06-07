import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_namespace_telemetry_api_telemetry_namespace_get",
  "toolDescription": "Get Namespace Telemetry",
  "baseUrl": "https://api.example.com",
  "path": "/api/telemetry/{namespace}",
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