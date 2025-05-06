import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "simplegenerateimage",
  "toolDescription": "/api/v1/image/generations",
  "baseUrl": "https://api.venice.ai/api/v1",
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
      "background": "background",
      "model": "model",
      "moderation": "moderation",
      "n": "n",
      "output_compression": "output_compression",
      "output_format": "output_format",
      "prompt": "prompt",
      "quality": "quality",
      "response_format": "response_format",
      "size": "size",
      "style": "style",
      "user": "user"
    },
    "header": {
      "Accept-Encoding": "Accept-Encoding"
    }
  },
  inputParamsSchema
}

export default tool