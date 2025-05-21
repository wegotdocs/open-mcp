import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdenunciationendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/denunciations",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "userId": "userId",
      "isAnonymous": "isAnonymous",
      "comment": "comment",
      "subcategoryId": "subcategoryId"
    }
  },
  inputParamsSchema
}

export default tool