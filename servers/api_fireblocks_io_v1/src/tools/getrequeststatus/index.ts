import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrequeststatus",
  "toolDescription": "Get request status",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/cosigners/{cosignerId}/api_keys/{apiKeyId}/{requestId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "cosignerId": "cosignerId",
      "apiKeyId": "apiKeyId",
      "requestId": "requestId"
    }
  },
  inputParamsSchema
}

export default tool