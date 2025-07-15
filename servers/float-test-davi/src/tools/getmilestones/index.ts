import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmilestones",
  "toolDescription": "List project milestones",
  "baseUrl": "https://api.float.com/v3",
  "path": "/milestones",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "client_id": "client_id",
      "project_id": "project_id",
      "phase_id": "phase_id",
      "page": "page",
      "per-page": "per-page"
    }
  },
  inputParamsSchema
}

export default tool