import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpasswordresetkeyendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/password-reset-keys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "userEmail": "userEmail"
    }
  },
  inputParamsSchema
}

export default tool