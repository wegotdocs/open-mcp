import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_postgres_tables_api_postgres_namespace_tables_get",
  "toolDescription": "Get Postgres Tables",
  "baseUrl": "https://api.example.com",
  "path": "/api/postgres/{namespace}/tables",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "database": "database",
      "schema": "schema"
    }
  },
  inputParamsSchema
}

export default tool