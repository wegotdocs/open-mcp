import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettoprespondedsurveysendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/surveys/top-responded",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "clientId": "clientId",
      "groupId": "groupId",
      "startDate": "startDate",
      "endDate": "endDate",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool