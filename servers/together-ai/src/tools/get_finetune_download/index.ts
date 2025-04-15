import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_finetune_download",
  "toolDescription": "Download model",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/finetune/download",
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
    "query": {
      "ft_id": "ft_id",
      "checkpoint_step": "checkpoint_step",
      "checkpoint": "checkpoint",
      "output": "output"
    }
  },
  inputParamsSchema
}

export default tool