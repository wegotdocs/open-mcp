import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "key_revoke_nosecret",
  "toolDescription": "Revoke an Authentiq ID using email & phone.\n\nIf called with `email` and `phone` only, a verification code \nwill be sent by email. Do a second call adding `code` to \ncomplete the revocation.",
  "baseUrl": "https://6-dot-authentiqio.appspot.com",
  "path": "/key",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "email": "email",
      "phone": "phone",
      "code": "code"
    }
  },
  inputParamsSchema
}

export default tool