import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gmail_handler_api_v1_webhooks_gmail_post",
  "toolDescription": "Gmail Handler",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/webhooks/gmail",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool