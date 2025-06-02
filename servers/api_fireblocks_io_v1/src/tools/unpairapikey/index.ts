import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unpairapikey",
  "toolDescription": "Unpair API key",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/cosigners/{cosignerId}/api_keys/{apiKeyId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "cosignerId": "cosignerId",
      "apiKeyId": "apiKeyId"
    }
  },
  inputParamsSchema
}

export default tool