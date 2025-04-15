import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "spaceskey_create",
  "toolDescription": "Create a New Spaces Access Key",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/spaces/keys",
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
      "name": "name",
      "grants": "grants",
      "access_key": "access_key",
      "created_at": "created_at"
    }
  },
  inputParamsSchema
}

export default tool