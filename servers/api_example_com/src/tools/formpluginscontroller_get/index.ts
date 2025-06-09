import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formpluginscontroller_get",
  "toolDescription": "Retrieve a list of all plugins registered for the current tenant",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/plugins",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "isDisabled": "isDisabled"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool