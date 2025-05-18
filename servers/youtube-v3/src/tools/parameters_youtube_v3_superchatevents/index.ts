import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_youtube_v3_superchatevents",
  "toolDescription": "",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/superChatEvents",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool