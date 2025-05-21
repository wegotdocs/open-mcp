import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listsurveysendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/surveys/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "status": "status",
      "type": "type",
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool