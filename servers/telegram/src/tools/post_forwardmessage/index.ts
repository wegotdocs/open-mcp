import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_forwardmessage",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/forwardMessage",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Parameters": "Parameters",
      "chat_id": "chat_id",
      "from_chat_id": "from_chat_id",
      "disable_notification": "disable_notification",
      "message_id": "message_id"
    }
  },
  inputParamsSchema
}

export default tool