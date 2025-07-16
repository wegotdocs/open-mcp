import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "processvoicecommand",
  "toolDescription": "处理语音指令",
  "baseUrl": "https://api.smarthome.com/v1",
  "path": "/voice-commands",
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
      "text": "text",
      "userId": "userId",
      "context": "context"
    }
  },
  inputParamsSchema
}

export default tool