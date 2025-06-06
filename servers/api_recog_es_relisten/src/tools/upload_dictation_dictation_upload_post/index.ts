import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_dictation_dictation_upload_post",
  "toolDescription": "Upload Dictation",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/dictation/upload",
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
      "contentType": "contentType"
    }
  },
  inputParamsSchema
}

export default tool