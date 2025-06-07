import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "report_spark_jobs_api_agents_agent_id_spark_jobs_post",
  "toolDescription": "Report Spark Jobs",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}/spark-jobs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id"
    }
  },
  inputParamsSchema
}

export default tool