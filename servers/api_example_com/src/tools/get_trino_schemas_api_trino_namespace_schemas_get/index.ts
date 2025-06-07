import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_trino_schemas_api_trino_namespace_schemas_get",
  "toolDescription": "Get Trino Schemas",
  "baseUrl": "https://api.example.com",
  "path": "/api/trino/{namespace}/schemas",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "catalog": "catalog"
    }
  },
  inputParamsSchema
}

export default tool