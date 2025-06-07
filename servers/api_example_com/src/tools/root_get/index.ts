import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "root_get",
  "toolDescription": "Root",
  "baseUrl": "https://api.example.com",
  "path": "/",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool