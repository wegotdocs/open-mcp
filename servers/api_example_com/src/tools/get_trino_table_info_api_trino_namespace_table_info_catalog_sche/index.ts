import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_trino_table_info_api_trino_namespace_table_info_catalog_sche",
  "toolDescription": "Get Trino Table Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/trino/{namespace}/table-info/{catalog}/{schema}/{table}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "catalog": "catalog",
      "schema": "schema",
      "table": "table"
    }
  },
  inputParamsSchema
}

export default tool