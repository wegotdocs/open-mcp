import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_sendmessage",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/sendMessage",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Parameters": "Parameters",
      "chat_id": "chat_id",
      "text": "text",
      "parse_mode": "parse_mode",
      "disable_web_page_preview": "disable_web_page_preview",
      "disable_notification": "disable_notification",
      "reply_to_message_id": "reply_to_message_id",
      "reply_markup": "reply_markup"
    }
  },
  inputParamsSchema
}

export default tool