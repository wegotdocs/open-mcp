import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_sharedwebserverlog",
  "toolDescription": "Download shared web server log",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/SharedWebServerLog",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool