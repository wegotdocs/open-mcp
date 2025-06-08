import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_getupdates",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/getUpdates",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Parameters": "Parameters",
      "offset": "offset",
      "limit": "limit",
      "timeout": "timeout"
    }
  },
  inputParamsSchema
}

export default tool