import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pairapikey",
  "toolDescription": "Pair API key",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/cosigners/{cosignerId}/api_keys/{apiKeyId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "cosignerId": "cosignerId",
      "apiKeyId": "apiKeyId"
    },
    "body": {
      "callbackHandler": "callbackHandler"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool