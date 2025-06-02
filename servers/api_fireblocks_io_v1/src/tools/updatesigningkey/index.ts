import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesigningkey",
  "toolDescription": "Modify the signing keyId",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/key_link/signing_keys/{keyId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "keyId": "keyId"
    },
    "body": {
      "vaultAccountId": "vaultAccountId"
    }
  },
  inputParamsSchema
}

export default tool