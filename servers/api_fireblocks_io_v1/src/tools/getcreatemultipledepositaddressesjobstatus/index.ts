import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcreatemultipledepositaddressesjobstatus",
  "toolDescription": "Get the job status of the bulk deposit address creation",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/addresses/bulk/{jobId}",
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