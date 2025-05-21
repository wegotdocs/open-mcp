import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listdenunciationsendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/denunciations/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "userId": "userId",
      "clientId": "clientId",
      "categoryId": "categoryId",
      "subcategoryId": "subcategoryId",
      "groupId": "groupId",
      "createdDateString": "createdDateString"
    }
  },
  inputParamsSchema
}

export default tool