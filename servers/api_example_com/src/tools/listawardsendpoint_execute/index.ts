import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listawardsendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/awards/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "userId": "userId",
      "badgeId": "badgeId",
      "isActive": "isActive"
    }
  },
  inputParamsSchema
}

export default tool