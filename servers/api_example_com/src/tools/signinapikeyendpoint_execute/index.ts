import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "signinapikeyendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/auth/api-key/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "clientIdEncrypted": "clientIdEncrypted",
      "apiKeyEncrypted": "apiKeyEncrypted"
    }
  },
  inputParamsSchema
}

export default tool