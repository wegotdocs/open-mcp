import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_credential_hashes_emails",
  "toolDescription": "Create an email credential",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/credential-hashes/emails",
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
      "port": "port",
      "encryption": "encryption",
      "auth": "auth",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool