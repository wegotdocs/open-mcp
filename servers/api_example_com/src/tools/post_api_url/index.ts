import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_api_url",
  "toolDescription": "Add new URLs to the user's account",
  "baseUrl": "https://api.example.com",
  "path": "/api/url",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool