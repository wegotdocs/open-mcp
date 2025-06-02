import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "disablevalidationkey",
  "toolDescription": "Disables a validation key",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/key_link/validation_keys/{keyId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "keyId": "keyId"
    },
    "body": {
      "enabled": "enabled"
    }
  },
  inputParamsSchema
}

export default tool