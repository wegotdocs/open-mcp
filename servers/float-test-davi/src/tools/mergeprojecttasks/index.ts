import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mergeprojecttasks",
  "toolDescription": "Merges project tasks and all associations into a single, new or existing, project task",
  "baseUrl": "https://api.float.com/v3",
  "path": "/project-tasks/merge",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "task_meta_ids": "task_meta_ids",
      "task_name": "task_name",
      "billable": "billable"
    }
  },
  inputParamsSchema
}

export default tool