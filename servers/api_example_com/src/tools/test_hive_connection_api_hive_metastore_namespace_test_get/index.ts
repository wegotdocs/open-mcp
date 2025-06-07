import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "test_hive_connection_api_hive_metastore_namespace_test_get",
  "toolDescription": "Test Hive Connection",
  "baseUrl": "https://api.example.com",
  "path": "/api/hive-metastore/{namespace}/test",
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