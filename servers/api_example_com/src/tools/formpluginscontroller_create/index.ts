import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formpluginscontroller_create",
  "toolDescription": "Create new tenant level form plugins resource.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/plugins",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool