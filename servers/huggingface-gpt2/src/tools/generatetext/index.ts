import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "generatetext",
  "toolDescription": "Generate text with GPT-2",
  "baseUrl": "https://api-inference.huggingface.co",
  "path": "/models/gpt2",
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
      "inputs": "inputs"
    }
  },
  inputParamsSchema
}

export default tool