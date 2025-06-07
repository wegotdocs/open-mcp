import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "execute_trino_query_api_trino_namespace_query_post",
  "toolDescription": "Execute Trino Query",
  "baseUrl": "https://api.example.com",
  "path": "/api/trino/{namespace}/query",
  "method": "post",
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