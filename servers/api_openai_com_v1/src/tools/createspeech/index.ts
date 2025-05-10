import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createspeech",
  "toolDescription": "Generates audio from the input text.",
  "baseUrl": "https://api.openai.com/v1",
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
      "instructions": "instructions",
      "voice": "voice",
      "response_format": "response_format",
      "speed": "speed"
    }
  },
  inputParamsSchema
}

export default tool