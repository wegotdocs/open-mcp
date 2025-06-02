import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getjobs",
  "toolDescription": "Return a list of jobs belonging to tenant",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/batch/jobs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "fromTime": "fromTime",
      "toTime": "toTime"
    }
  },
  inputParamsSchema
}

export default tool