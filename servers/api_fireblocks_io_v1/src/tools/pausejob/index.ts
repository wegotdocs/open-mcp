import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pausejob",
  "toolDescription": "Pause a job",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/batch/{jobId}/pause",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "jobId": "jobId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool