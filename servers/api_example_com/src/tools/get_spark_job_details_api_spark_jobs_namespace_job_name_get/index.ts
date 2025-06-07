import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_spark_job_details_api_spark_jobs_namespace_job_name_get",
  "toolDescription": "Get Spark Job Details",
  "baseUrl": "https://api.example.com",
  "path": "/api/spark/jobs/{namespace}/{job_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "namespace": "namespace",
      "job_name": "job_name"
    }
  },
  inputParamsSchema
}

export default tool