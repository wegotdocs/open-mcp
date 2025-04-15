import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "audio_speech",
  "toolDescription": "Create audio generation request",
  "baseUrl": "https://api.together.xyz/v1",
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
      "model": "model",
      "input": "input",
      "voice": "voice",
      "response_format": "response_format",
      "language": "language",
      "response_encoding": "response_encoding",
      "sample_rate": "sample_rate",
      "stream": "stream"
    }
  },
  inputParamsSchema
}

export default tool