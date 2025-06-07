import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_linear_issue_api_linear_create_issue_post",
  "toolDescription": "Create Linear Issue",
  "baseUrl": "https://api.example.com",
  "path": "/api/linear/create-issue",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool