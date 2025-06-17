import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_authentication_options",
  "toolDescription": "Change authentication options",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/authentication-options",
  "method": "put",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "passwordPattern": "passwordPattern",
      "credentialTtl": "credentialTtl",
      "authTokenTtl": "authTokenTtl",
      "resetTokenTtl": "resetTokenTtl"
    }
  },
  inputParamsSchema
}

export default tool