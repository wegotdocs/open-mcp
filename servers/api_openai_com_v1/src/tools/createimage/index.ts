import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createimage",
  "toolDescription": "Creates an image given a prompt.",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/images/generations",
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
      "prompt": "prompt",
      "model": "model",
      "n": "n",
      "quality": "quality",
      "response_format": "response_format",
      "size": "size",
      "style": "style",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool