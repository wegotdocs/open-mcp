import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v3_0_iam_accounts",
  "toolDescription": "Send an invitation",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/iam/accounts",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "email": "email",
      "role": "role",
      "authType": "authType",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool