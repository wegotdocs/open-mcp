import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_signin",
  "toolDescription": "Create a session with email and password",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/signin",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email",
      "password": "password",
      "expiredTime": "expiredTime"
    }
  },
  inputParamsSchema
}

export default tool