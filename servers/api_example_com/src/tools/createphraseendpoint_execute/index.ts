import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createphraseendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/phrases",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "phrase": "phrase",
      "scheduleStringDate": "scheduleStringDate",
      "clientId": "clientId",
      "createdByUserId": "createdByUserId",
      "groupIds": "groupIds"
    }
  },
  inputParamsSchema
}

export default tool