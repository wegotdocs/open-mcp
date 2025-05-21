import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listdenunciationsubcategoriesendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/denunciation-subcategories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "categoryId": "categoryId"
    }
  },
  inputParamsSchema
}

export default tool