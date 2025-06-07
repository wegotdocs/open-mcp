import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "read_root_api_get",
  "toolDescription": "Read Root",
  "baseUrl": "https://api.example.com",
  "path": "/api/",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool