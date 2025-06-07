import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_postgres_status_api_postgres_namespace_status_get",
  "toolDescription": "Get Postgres Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/postgres/{namespace}/status",
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