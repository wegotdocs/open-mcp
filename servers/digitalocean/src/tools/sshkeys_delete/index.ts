import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sshkeys_delete",
  "toolDescription": "Delete an SSH Key",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/account/keys/{ssh_key_identifier}",
  "method": "delete",
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
      "ssh_key_identifier": "ssh_key_identifier"
    }
  },
  inputParamsSchema
}

export default tool