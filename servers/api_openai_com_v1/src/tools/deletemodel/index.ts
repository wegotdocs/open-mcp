import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletemodel",
  "toolDescription": "Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/models/{model}",
  "method": "delete",
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
      "model": "model"
    }
  },
  inputParamsSchema
}

export default tool