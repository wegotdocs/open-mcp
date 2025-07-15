import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmilestone",
  "toolDescription": "Retrieve a single milestone",
  "baseUrl": "https://api.float.com/v3",
  "path": "/milestones/{milestone_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "milestone_id": "milestone_id"
    }
  },
  inputParamsSchema
}

export default tool