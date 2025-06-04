import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sign_request",
  "toolDescription": "scope verification request\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/scope",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "test": "test"
    }
  },
  inputParamsSchema
}

export default tool