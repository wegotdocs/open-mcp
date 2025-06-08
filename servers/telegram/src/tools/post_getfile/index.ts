import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_getfile",
  "toolDescription": "",
  "baseUrl": "https://api.telegram.org/bot{token}",
  "path": "/getFile",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "Parameters": "Parameters",
      "file_id": "file_id"
    }
  },
  inputParamsSchema
}

export default tool