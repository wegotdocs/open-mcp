import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getjob",
  "toolDescription": "Get job details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/batch/{jobId}",
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