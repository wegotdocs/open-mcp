import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancelfinetuningjob",
  "toolDescription": "Immediately cancel a fine-tune job.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/fine_tuning/jobs/{fine_tuning_job_id}/cancel",
  "method": "post",
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
    }
  },
  inputParamsSchema
}

export default tool