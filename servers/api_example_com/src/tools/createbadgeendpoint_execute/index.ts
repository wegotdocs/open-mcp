import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createbadgeendpoint_execute",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/badges",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool