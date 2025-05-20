import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleterelease",
  "toolDescription": "Delete module release",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/releases/{release_slug}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization: Bearer <api_key>",
      "value": "<mcp-env-var>AUTHORIZATION_BEARER_API_KEY_</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION_BEARER_API_KEY_"
    }
  ],
  "paramsMap": {
    "path": {
      "release_slug": "release_slug"
    },
    "query": {
      "reason": "reason"
    }
  },
  inputParamsSchema
}

export default tool