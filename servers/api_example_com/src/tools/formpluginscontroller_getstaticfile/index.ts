import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "formpluginscontroller_getstaticfile",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/plugins/schema.json",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool