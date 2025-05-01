import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "runget",
  "toolDescription": "Run a val, specify any parameters in a querystring",
  "baseUrl": "https://api.val.town",
  "path": "/v1/run/{valname}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "valname": "valname"
    },
    "query": {
      "args": "args"
    }
  },
  inputParamsSchema
}

export default tool