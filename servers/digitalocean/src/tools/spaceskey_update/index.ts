import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "spaceskey_update",
  "toolDescription": "Update Spaces Access Keys",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/spaces/keys/{access_key}",
  "method": "put",
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
      "access_key": "access_key"
    },
    "body": {
      "name": "name",
      "grants": "grants",
      "access_key": "b_access_key",
      "created_at": "created_at"
    }
  },
  inputParamsSchema
}

export default tool