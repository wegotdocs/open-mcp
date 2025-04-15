import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "uploadmodel",
  "toolDescription": "Upload a custom model",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/models",
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
      "model_name": "model_name",
      "model_source": "model_source",
      "hf_token": "hf_token",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool