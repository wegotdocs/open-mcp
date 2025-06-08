import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "description_forwardmessage",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/forwardMessage",
  "method": "description",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool