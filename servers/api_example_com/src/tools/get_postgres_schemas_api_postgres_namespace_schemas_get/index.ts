import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_postgres_schemas_api_postgres_namespace_schemas_get",
  "toolDescription": "Get Postgres Schemas",
  "baseUrl": "https://api.example.com",
  "path": "/api/postgres/{namespace}/schemas",
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