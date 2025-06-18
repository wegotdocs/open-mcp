import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sync_gmail_handler_api_v1_webhooks_sync_gmail_post",
  "toolDescription": "Sync Gmail Handler",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/webhooks/sync/gmail",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool