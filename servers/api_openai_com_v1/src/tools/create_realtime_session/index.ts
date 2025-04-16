import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_realtime_session",
  "toolDescription": "Create an ephemeral API token for use in client-side applications with the\nRealtime API. Can be configured with the same session parameters as the\n`session.update` client event.\n\nIt responds with a session object, plus a `client_secret` key",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/realtime/sessions",
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
      "modalities": "modalities",
      "model": "model",
      "instructions": "instructions",
      "voice": "voice",
      "input_audio_format": "input_audio_format",
      "output_audio_format": "output_audio_format",
      "input_audio_transcription": "input_audio_transcription",
      "turn_detection": "turn_detection",
      "input_audio_noise_reduction": "input_audio_noise_reduction",
      "tools": "tools",
      "tool_choice": "tool_choice",
      "temperature": "temperature",
      "max_response_output_tokens": "max_response_output_tokens"
    }
  },
  inputParamsSchema
}

export default tool