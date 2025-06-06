import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_dictation_dictation_process_post",
  "toolDescription": "Create Dictation",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/dictation/process",
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
      "lang": "lang"
    }
  },
  inputParamsSchema
}

export default tool