import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_hive_tables_api_hive_metastore_namespace_tables_get",
  "toolDescription": "Get Hive Tables",
  "baseUrl": "https://api.example.com",
  "path": "/api/hive-metastore/{namespace}/tables",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "database": "database"
    }
  },
  inputParamsSchema
}

export default tool