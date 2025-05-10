import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_realtime_transcription_session",
  "toolDescription": "Create an ephemeral API token for use in client-side applications with the\nRealtime API specifically for realtime transcriptions. \nCan be configured with the same session parameters as the `transcription_session.update` client event.\n\nIt re",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/realtime/transcription_sessions",
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
      "input_audio_format": "input_audio_format",
      "input_audio_transcription": "input_audio_transcription",
      "turn_detection": "turn_detection",
      "input_audio_noise_reduction": "input_audio_noise_reduction",
      "include": "include"
    }
  },
  inputParamsSchema
}

export default tool