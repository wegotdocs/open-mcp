import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_credential_hashes_webhooks",
  "toolDescription": "Create a webhook credential",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/credential-hashes/webhooks",
  "method": "post",
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
      "hash": "hash",
      "host": "host",
      "auth": "auth"
    }
  },
  inputParamsSchema
}

export default tool