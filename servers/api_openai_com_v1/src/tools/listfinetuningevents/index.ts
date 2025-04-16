import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listfinetuningevents",
  "toolDescription": "Get status updates for a fine-tuning job.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/fine_tuning/jobs/{fine_tuning_job_id}/events",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "fine_tuning_job_id": "fine_tuning_job_id"
    },
    "query": {
      "after": "after",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool