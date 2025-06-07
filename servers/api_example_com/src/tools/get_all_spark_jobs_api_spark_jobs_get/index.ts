import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_spark_jobs_api_spark_jobs_get",
  "toolDescription": "Get All Spark Jobs",
  "baseUrl": "https://api.example.com",
  "path": "/api/spark/jobs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "include_history": "include_history"
    }
  },
  inputParamsSchema
}

export default tool