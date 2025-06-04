import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "push_login_request",
  "toolDescription": "push sign-in request\nSee: https://github.com/skion/authentiq/wiki/JWT-Examples",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "callback": "callback"
    }
  },
  inputParamsSchema
}

export default tool