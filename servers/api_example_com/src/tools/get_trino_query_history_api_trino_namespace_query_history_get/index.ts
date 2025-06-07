import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_trino_query_history_api_trino_namespace_query_history_get",
  "toolDescription": "Get Trino Query History",
  "baseUrl": "https://api.example.com",
  "path": "/api/trino/{namespace}/query-history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool