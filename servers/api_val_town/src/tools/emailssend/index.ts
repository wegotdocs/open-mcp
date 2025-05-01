import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "emailssend",
  "toolDescription": "Send emails",
  "baseUrl": "https://api.val.town",
  "path": "/v1/email",
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
      "subject": "subject",
      "from": "from",
      "headers": "headers",
      "to": "to",
      "cc": "cc",
      "bcc": "bcc",
      "text": "text",
      "html": "html",
      "attachments": "attachments",
      "replyToList": "replyToList"
    }
  },
  inputParamsSchema
}

export default tool