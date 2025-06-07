import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_trino_connection_api_trino_namespace_debug_get",
  "toolDescription": "Debug Trino Connection",
  "baseUrl": "https://api.example.com",
  "path": "/api/trino/{namespace}/debug",
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