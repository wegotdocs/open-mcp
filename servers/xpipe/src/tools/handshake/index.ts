import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "handshake",
  "toolDescription": "Establish session",
  "baseUrl": "http://localhost:21721",
  "path": "/handshake",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "auth": "auth",
      "client": "client"
    }
  },
  inputParamsSchema
}

export default tool