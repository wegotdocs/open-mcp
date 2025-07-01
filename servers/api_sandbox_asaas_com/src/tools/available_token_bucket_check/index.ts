import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "available_token_bucket_check",
  "toolDescription": "Available Token Bucket Check",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/pix/tokenBucket/addressKey",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool