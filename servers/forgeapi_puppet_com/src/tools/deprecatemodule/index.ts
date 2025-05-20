import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deprecatemodule",
  "toolDescription": "Deprecate module",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/modules/{module_slug}",
  "method": "patch",
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
      "module_slug": "module_slug"
    },
    "body": {
      "action": "action",
      "params": "params"
    }
  },
  inputParamsSchema
}

export default tool