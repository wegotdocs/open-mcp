import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteusersearchfilter",
  "toolDescription": "Delete search filter by ID",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/search_filters/{id}",
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
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool