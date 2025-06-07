import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trigger_repo_sync_api_system_repo_sync_sync_now_post",
  "toolDescription": "Trigger Repo Sync",
  "baseUrl": "https://api.example.com",
  "path": "/api/system/repo-sync/sync-now",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool