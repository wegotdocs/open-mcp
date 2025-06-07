import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "execute_postgres_query_api_postgres_namespace_query_post",
  "toolDescription": "Execute Postgres Query",
  "baseUrl": "https://api.example.com",
  "path": "/api/postgres/{namespace}/query",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "body": {
      "query": "query",
      "database": "database"
    }
  },
  inputParamsSchema
}

export default tool