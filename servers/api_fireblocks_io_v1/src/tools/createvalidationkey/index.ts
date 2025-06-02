import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createvalidationkey",
  "toolDescription": "Add a new validation key",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/key_link/validation_keys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "publicKeyPem": "publicKeyPem",
      "daysTillExpired": "daysTillExpired"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool