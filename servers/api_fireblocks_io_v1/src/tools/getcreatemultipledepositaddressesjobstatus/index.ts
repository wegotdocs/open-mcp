import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcreatemultipledepositaddressesjobstatus",
  "toolDescription": "Get job status of bulk creation of new deposit addresses",
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