import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_create",
  "toolDescription": "Create API Key",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/auth",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "clientId": "clientId",
      "clientSecret": "clientSecret"
    }
  },
  inputParamsSchema
}

export default tool