import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_trino_status_api_trino_namespace_status_get",
  "toolDescription": "Get Trino Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/trino/{namespace}/status",
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