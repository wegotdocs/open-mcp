import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_count",
  "toolDescription": "Count how many cat",
  "baseUrl": "https://api.example.com",
  "path": "/api/count",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool