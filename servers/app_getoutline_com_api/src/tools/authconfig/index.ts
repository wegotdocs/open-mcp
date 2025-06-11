import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "authconfig",
  "toolDescription": "Retrieve auth config",
  "baseUrl": "https://app.getoutline.com/api",
  "path": "/auth.config",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool