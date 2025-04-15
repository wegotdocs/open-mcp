import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createendpoint",
  "toolDescription": "Create a dedicated endpoint, it will start automatically",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/endpoints",
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
    "body": {
      "display_name": "display_name",
      "model": "model",
      "hardware": "hardware",
      "autoscaling": "autoscaling",
      "disable_prompt_cache": "disable_prompt_cache",
      "disable_speculative_decoding": "disable_speculative_decoding",
      "state": "state",
      "inactive_timeout": "inactive_timeout"
    }
  },
  inputParamsSchema
}

export default tool