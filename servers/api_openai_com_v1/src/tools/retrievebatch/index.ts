import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievebatch",
  "toolDescription": "Retrieves a batch.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/batches/{batch_id}",
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
      "batch_id": "batch_id"
    }
  },
  inputParamsSchema
}

export default tool