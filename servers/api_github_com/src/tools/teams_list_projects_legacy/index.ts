import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_list_projects_legacy",
  "toolDescription": "List team projects (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/projects",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool