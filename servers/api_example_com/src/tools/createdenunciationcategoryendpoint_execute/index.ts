import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdenunciationcategoryendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/denunciation-categories",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool