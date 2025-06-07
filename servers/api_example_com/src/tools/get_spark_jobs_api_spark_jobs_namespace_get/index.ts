import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_spark_jobs_api_spark_jobs_namespace_get",
  "toolDescription": "Get Spark Jobs",
  "baseUrl": "https://api.example.com",
  "path": "/api/spark/jobs/{namespace}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace"
    },
    "query": {
      "include_history": "include_history"
    }
  },
  inputParamsSchema
}

export default tool