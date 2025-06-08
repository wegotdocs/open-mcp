import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_sendvoice",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/sendVoice",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Parameters": "Parameters",
      "chat_id": "chat_id",
      "voice": "voice",
      "duration": "duration",
      "disable_notification": "disable_notification",
      "reply_to_message_id": "reply_to_message_id",
      "reply_markup": "reply_markup"
    }
  },
  inputParamsSchema
}

export default tool