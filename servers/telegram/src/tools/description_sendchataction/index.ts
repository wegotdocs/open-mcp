import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "description_sendchataction",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/sendChatAction",
  "method": "description",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool