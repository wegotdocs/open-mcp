import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formsettingscontroller_getformsettings",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/settings",
  "method": "get",
  "security": [],
  "paramsMap": {
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool