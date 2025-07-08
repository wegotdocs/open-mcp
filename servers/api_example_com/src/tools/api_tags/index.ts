import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_tags",
  "toolDescription": "Will return all tags",
  "baseUrl": "https://api.example.com",
  "path": "/api/tags",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool