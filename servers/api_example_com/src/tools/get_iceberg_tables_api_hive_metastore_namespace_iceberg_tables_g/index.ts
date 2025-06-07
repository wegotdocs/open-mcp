import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_iceberg_tables_api_hive_metastore_namespace_iceberg_tables_g",
  "toolDescription": "Get Iceberg Tables",
  "baseUrl": "https://api.example.com",
  "path": "/api/hive-metastore/{namespace}/iceberg-tables",
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