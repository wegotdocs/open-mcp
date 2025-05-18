import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_youtube_v3_activities",
  "toolDescription": "",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/activities",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool