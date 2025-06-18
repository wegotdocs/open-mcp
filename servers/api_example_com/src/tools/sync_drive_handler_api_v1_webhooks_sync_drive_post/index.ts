import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sync_drive_handler_api_v1_webhooks_sync_drive_post",
  "toolDescription": "Sync Drive Handler",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/webhooks/sync/drive",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool