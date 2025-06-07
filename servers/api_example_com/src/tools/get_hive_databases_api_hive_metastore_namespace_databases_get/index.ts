import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_hive_databases_api_hive_metastore_namespace_databases_get",
  "toolDescription": "Get Hive Databases",
  "baseUrl": "https://api.example.com",
  "path": "/api/hive-metastore/{namespace}/databases",
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