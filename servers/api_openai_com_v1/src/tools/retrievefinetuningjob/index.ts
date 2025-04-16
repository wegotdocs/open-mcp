import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievefinetuningjob",
  "toolDescription": "Get info about a fine-tuning job.\n\n[Learn more about fine-tuning](/docs/guides/fine-tuning)",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/fine_tuning/jobs/{fine_tuning_job_id}",
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
    }
  },
  inputParamsSchema
}

export default tool