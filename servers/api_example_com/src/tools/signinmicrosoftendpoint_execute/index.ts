import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "signinmicrosoftendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/auth/microsoft/login",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool