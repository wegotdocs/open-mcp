import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_hive_metastore_status_api_hive_metastore_namespace_status_ge",
  "toolDescription": "Get Hive Metastore Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/hive-metastore/{namespace}/status",
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