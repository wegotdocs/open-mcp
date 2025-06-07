import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_table_info_api_hive_metastore_namespace_table_info_database_",
  "toolDescription": "Get Table Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/hive-metastore/{namespace}/table-info/{database}/{table}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "database": "database",
      "table": "table"
    }
  },
  inputParamsSchema
}

export default tool