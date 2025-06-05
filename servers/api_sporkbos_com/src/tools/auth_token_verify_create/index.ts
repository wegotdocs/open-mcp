import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "auth_token_verify_create",
  "toolDescription": "Takes a token and indicates if it is valid.  This view provides no\ninformation about a token's fitness for a particular use.",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/auth/token/verify/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool