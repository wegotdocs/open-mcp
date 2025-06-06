import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "realtime_dictation_dictation_process_real_time_post",
  "toolDescription": "Realtime Dictation",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/dictation/process/real_time",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "key": "key",
      "lang": "lang",
      "transcription": "transcription",
      "formattedTranscription": "formattedTranscription",
      "healthCenterGroup": "healthCenterGroup"
    }
  },
  inputParamsSchema
}

export default tool