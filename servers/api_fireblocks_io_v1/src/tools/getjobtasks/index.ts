import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getjobtasks",
  "toolDescription": "Return a list of tasks for given job",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/batch/{jobId}/tasks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "jobId": "jobId"
    }
  },
  inputParamsSchema
}

export default tool