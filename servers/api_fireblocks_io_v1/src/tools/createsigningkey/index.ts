import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createsigningkey",
  "toolDescription": "Add a new signing key",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/key_link/signing_keys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "signingDeviceKeyId": "signingDeviceKeyId",
      "signedCertPem": "signedCertPem",
      "agentUserId": "agentUserId",
      "proofOfOwnership": "proofOfOwnership"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool