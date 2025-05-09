import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createspeech",
  "toolDescription": "/api/v1/audio/speech",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/audio/speech",
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
      "input": "input",
      "model": "model",
      "response_format": "response_format",
      "speed": "speed",
      "streaming": "streaming",
      "voice": "voice"
    }
  },
  inputParamsSchema
}

export default tool