import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_check_token",
  "toolDescription": "Check a token",
  "baseUrl": "https://api.github.com",
  "path": "/applications/{client_id}/token",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "client_id": "client_id"
    },
    "body": {
      "access_token": "access_token"
    }
  },
  inputParamsSchema
}

export default tool