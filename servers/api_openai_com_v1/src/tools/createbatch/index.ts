import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createbatch",
  "toolDescription": "Creates and executes a batch from an uploaded file of requests",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/batches",
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
      "input_file_id": "input_file_id",
      "endpoint": "endpoint",
      "completion_window": "completion_window",
      "metadata": "metadata"
    }
  },
  inputParamsSchema
}

export default tool