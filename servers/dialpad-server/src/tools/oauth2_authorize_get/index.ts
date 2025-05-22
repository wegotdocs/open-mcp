import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oauth2_authorize_get",
  "toolDescription": "Token -- Authorize",
  "baseUrl": "https://dialpad.com",
  "path": "/oauth2/authorize",
  "method": "get",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "code_challenge_method": "code_challenge_method",
      "code_challenge": "code_challenge",
      "scope": "scope",
      "response_type": "response_type",
      "redirect_uri": "redirect_uri",
      "client_id": "client_id",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool