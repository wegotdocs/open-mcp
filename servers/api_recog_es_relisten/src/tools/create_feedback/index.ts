import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_feedback",
  "toolDescription": "Create feedback for a clinical note",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/feedback",
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
      "resultid": "resultid",
      "audio": "audio",
      "transcription": "transcription",
      "anamnesis": "anamnesis",
      "fields": "fields",
      "comments": "comments",
      "extraFields": "extraFields"
    }
  },
  inputParamsSchema
}

export default tool