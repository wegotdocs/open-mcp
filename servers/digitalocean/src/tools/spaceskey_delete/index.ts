import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "spaceskey_delete",
  "toolDescription": "Delete a Spaces Access Key",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/spaces/keys/{access_key}",
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
      "access_key": "access_key"
    }
  },
  inputParamsSchema
}

export default tool