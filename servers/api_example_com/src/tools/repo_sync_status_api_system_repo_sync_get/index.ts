import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repo_sync_status_api_system_repo_sync_get",
  "toolDescription": "Repo Sync Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/system/repo-sync",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool