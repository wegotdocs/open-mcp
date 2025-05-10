import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "runpost",
  "toolDescription": "Run a val, with arguments in the request body",
  "baseUrl": "https://api.val.town",
  "path": "/v1/run/{valname}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "valname": "valname"
    },
    "body": {
      "args": "args"
    }
  },
  inputParamsSchema
}

export default tool