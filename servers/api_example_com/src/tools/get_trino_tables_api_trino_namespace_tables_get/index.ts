import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_trino_tables_api_trino_namespace_tables_get",
  "toolDescription": "Get Trino Tables",
  "baseUrl": "https://api.example.com",
  "path": "/api/trino/{namespace}/tables",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "catalog": "catalog",
      "schema": "schema"
    }
  },
  inputParamsSchema
}

export default tool