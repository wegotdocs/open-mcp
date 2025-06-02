import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdeployableaddress",
  "toolDescription": "Get deterministic address for contract deployment",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/multichain/deterministic_address",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "chainDescriptor": "chainDescriptor",
      "templateId": "templateId",
      "initParams": "initParams",
      "salt": "salt"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool