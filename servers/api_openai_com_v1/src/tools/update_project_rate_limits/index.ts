import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_project_rate_limits",
  "toolDescription": "Updates a project rate limit.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/projects/{project_id}/rate_limits/{rate_limit_id}",
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
      "project_id": "project_id",
      "rate_limit_id": "rate_limit_id"
    },
    "body": {
      "max_requests_per_1_minute": "max_requests_per_1_minute",
      "max_tokens_per_1_minute": "max_tokens_per_1_minute",
      "max_images_per_1_minute": "max_images_per_1_minute",
      "max_audio_megabytes_per_1_minute": "max_audio_megabytes_per_1_minute",
      "max_requests_per_1_day": "max_requests_per_1_day",
      "batch_1_day_max_input_tokens": "batch_1_day_max_input_tokens"
    }
  },
  inputParamsSchema
}

export default tool