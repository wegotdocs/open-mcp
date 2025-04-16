import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievemodel",
  "toolDescription": "Retrieves a model instance, providing basic information about the model such as the owner and permissioning.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/models/{model}",
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
      "model": "model"
    }
  },
  inputParamsSchema
}

export default tool