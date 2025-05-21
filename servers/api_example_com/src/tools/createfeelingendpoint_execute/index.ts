import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createfeelingendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/feelings",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "userId": "userId",
      "typesIds": "typesIds",
      "comments": "comments"
    }
  },
  inputParamsSchema
}

export default tool