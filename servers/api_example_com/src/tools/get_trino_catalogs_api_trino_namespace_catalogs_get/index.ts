import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_trino_catalogs_api_trino_namespace_catalogs_get",
  "toolDescription": "Get Trino Catalogs",
  "baseUrl": "https://api.example.com",
  "path": "/api/trino/{namespace}/catalogs",
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