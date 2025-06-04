import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sign_confirm",
  "toolDescription": "this is a scope confirmation",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/scope/{job}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "job": "job"
    }
  },
  inputParamsSchema
}

export default tool