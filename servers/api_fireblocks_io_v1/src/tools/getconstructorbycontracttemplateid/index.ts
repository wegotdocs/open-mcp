import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getconstructorbycontracttemplateid",
  "toolDescription": "Return contract template's constructor",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/templates/{contractTemplateId}/constructor",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "contractTemplateId": "contractTemplateId"
    },
    "query": {
      "withDocs": "withDocs"
    }
  },
  inputParamsSchema
}

export default tool