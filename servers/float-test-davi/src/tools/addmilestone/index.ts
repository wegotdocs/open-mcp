import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addmilestone",
  "toolDescription": "Add a new project milestone",
  "baseUrl": "https://api.float.com/v3",
  "path": "/milestones",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "milestone_id": "milestone_id",
      "name": "name",
      "project_id": "project_id",
      "phase_id": "phase_id",
      "date": "date",
      "end_date": "end_date",
      "created": "created",
      "modified": "modified"
    }
  },
  inputParamsSchema
}

export default tool