import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "runtimecontroller_queryformdatasource",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/runtime/{formId}/datasources/{datasourceId}/execute",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "formId": "formId",
      "datasourceId": "datasourceId"
    },
    "query": {
      "formType": "formType"
    }
  },
  inputParamsSchema
}

export default tool