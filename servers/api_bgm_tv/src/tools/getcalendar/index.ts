import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcalendar",
  "toolDescription": "每日放送",
  "baseUrl": "https://api.bgm.tv",
  "path": "/calendar",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool