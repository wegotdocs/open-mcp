import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfeatureendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/features",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "code": "code"
    }
  },
  inputParamsSchema
}

export default tool