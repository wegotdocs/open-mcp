import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfunctionabibycontracttemplateid",
  "toolDescription": "Return contract template's function",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/templates/{contractTemplateId}/function",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "contractTemplateId": "contractTemplateId"
    },
    "query": {
      "functionSignature": "functionSignature"
    }
  },
  inputParamsSchema
}

export default tool