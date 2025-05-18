import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_youtube_v3_thirdpartylinks",
  "toolDescription": "",
  "baseUrl": "https://youtube.googleapis.com",
  "path": "/youtube/v3/thirdPartyLinks",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool