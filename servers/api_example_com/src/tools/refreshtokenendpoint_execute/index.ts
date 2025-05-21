import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refreshtokenendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/auth/refresh-token",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "refreshToken": "refreshToken"
    }
  },
  inputParamsSchema
}

export default tool