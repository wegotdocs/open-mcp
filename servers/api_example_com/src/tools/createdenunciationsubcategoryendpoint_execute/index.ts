import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createdenunciationsubcategoryendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/denunciation-subcategories",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "categoryId": "categoryId"
    }
  },
  inputParamsSchema
}

export default tool