import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatecallbackhandler",
  "toolDescription": "Update API key callback handler",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/cosigners/{cosignerId}/api_keys/{apiKeyId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "cosignerId": "cosignerId",
      "apiKeyId": "apiKeyId"
    },
    "body": {
      "callbackHandler": "callbackHandler"
    }
  },
  inputParamsSchema
}

export default tool