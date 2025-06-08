import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "description_sendlocation",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/sendLocation",
  "method": "description",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool