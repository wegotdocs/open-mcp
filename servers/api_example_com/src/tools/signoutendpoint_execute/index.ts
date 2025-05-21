import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "signoutendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/auth/logout",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool