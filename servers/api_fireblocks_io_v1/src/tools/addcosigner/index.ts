import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addcosigner",
  "toolDescription": "Add cosigner",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/cosigners",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "apiKeyId": "apiKeyId",
      "name": "name",
      "existingCosigner": "existingCosigner"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool