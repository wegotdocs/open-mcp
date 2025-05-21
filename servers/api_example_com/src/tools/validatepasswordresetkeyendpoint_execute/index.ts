import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validatepasswordresetkeyendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/password-reset-keys/validate/{key}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool