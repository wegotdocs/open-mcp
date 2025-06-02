import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvalidationkey",
  "toolDescription": "Get a validation key by `keyId`",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/key_link/validation_keys/{keyId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "keyId": "keyId"
    }
  },
  inputParamsSchema
}

export default tool