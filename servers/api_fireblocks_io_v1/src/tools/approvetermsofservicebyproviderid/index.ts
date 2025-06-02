import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "approvetermsofservicebyproviderid",
  "toolDescription": "Approve staking terms of service",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/providers/{providerId}/approveTermsOfService",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "providerId": "providerId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool