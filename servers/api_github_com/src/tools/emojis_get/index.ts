import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "emojis_get",
  "toolDescription": "Get emojis",
  "baseUrl": "https://api.github.com",
  "path": "/emojis",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool