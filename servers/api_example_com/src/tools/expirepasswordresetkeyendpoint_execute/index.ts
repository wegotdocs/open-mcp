import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "expirepasswordresetkeyendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/password-reset-keys/expire/{key}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool