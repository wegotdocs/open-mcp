import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_postgres_databases_api_postgres_namespace_databases_get",
  "toolDescription": "Get Postgres Databases",
  "baseUrl": "https://api.example.com",
  "path": "/api/postgres/{namespace}/databases",
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