import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_hive_connection_api_hive_metastore_namespace_debug_get",
  "toolDescription": "Debug Hive Connection",
  "baseUrl": "https://api.example.com",
  "path": "/api/hive-metastore/{namespace}/debug",
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