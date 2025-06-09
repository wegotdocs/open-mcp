import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "verification_verify",
  "toolDescription": "",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/auth/email/verify/{userId}/{hash}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "userId": "userId",
      "hash": "hash"
    },
    "query": {
      "expires": "expires",
      "type": "type",
      "signature": "signature"
    }
  },
  inputParamsSchema
}

export default tool