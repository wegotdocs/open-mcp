import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_postgres_table_info_api_postgres_namespace_table_info_schema",
  "toolDescription": "Get Postgres Table Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/postgres/{namespace}/table-info/{schema}/{table}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "schema": "schema",
      "table": "table"
    },
    "query": {
      "database": "database"
    }
  },
  inputParamsSchema
}

export default tool