import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setfeedbackasync",
  "toolDescription": "Set feedback to a response",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/chat/feedback",
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
      "typeFeedback": "typeFeedback",
      "reasonKO": "reasonKO",
      "conversationResponseId": "conversationResponseId"
    }
  },
  inputParamsSchema
}

export default tool