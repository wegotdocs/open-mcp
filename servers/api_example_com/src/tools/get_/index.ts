import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_",
  "toolDescription": "Redirect to swagger interface for API documentation",
  "baseUrl": "https://api.example.com",
  "path": "",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool