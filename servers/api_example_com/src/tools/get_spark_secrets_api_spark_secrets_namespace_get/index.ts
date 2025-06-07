import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_spark_secrets_api_spark_secrets_namespace_get",
  "toolDescription": "Get Spark Secrets",
  "baseUrl": "https://api.example.com",
  "path": "/api/spark/secrets/{namespace}",
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