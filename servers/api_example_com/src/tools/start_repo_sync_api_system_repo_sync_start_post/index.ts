import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "start_repo_sync_api_system_repo_sync_start_post",
  "toolDescription": "Start Repo Sync",
  "baseUrl": "https://api.example.com",
  "path": "/api/system/repo-sync/start",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool