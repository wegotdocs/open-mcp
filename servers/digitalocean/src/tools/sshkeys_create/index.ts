import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sshkeys_create",
  "toolDescription": "Create a New SSH Key",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/account/keys",
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
      "id": "id",
      "fingerprint": "fingerprint",
      "public_key": "public_key",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool