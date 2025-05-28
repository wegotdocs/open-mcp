import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_quotes_quote_status_",
  "toolDescription": "quotes quote status read",
  "baseUrl": "http://localhost:8000",
  "path": "/quotes/quote_status/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "noauth <mcp-env-var>NOAUTH_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "NOAUTH_CREDENTIALS"
    }
  ],
  "paramsMap": {
    "header": {
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool