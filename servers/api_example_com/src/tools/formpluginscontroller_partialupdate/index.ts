import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formpluginscontroller_partialupdate",
  "toolDescription": "Partially update the plugin.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/plugins/{id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "header": {
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool