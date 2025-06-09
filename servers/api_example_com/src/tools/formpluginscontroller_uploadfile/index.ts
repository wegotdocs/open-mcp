import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formpluginscontroller_uploadfile",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/plugins/upload",
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