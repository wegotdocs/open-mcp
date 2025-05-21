import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatephraseendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/phrases/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "phrase": "phrase",
      "scheduleStringDate": "scheduleStringDate",
      "groupsIds": "groupsIds"
    }
  },
  inputParamsSchema
}

export default tool