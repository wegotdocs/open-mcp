import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "runtimecontroller_gettabledata",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/runtime/{formId}/table/{tableId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "formId": "formId",
      "tableId": "tableId"
    },
    "query": {
      "formType": "formType"
    }
  },
  inputParamsSchema
}

export default tool