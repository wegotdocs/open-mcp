import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addrelease",
  "toolDescription": "Create module release",
  "baseUrl": "https://forgeapi.puppet.com",
  "path": "/v3/releases",
  "method": "post",
  "security": [
    {
      "key": "Authorization: Bearer <api_key>",
      "value": "<mcp-env-var>AUTHORIZATION_BEARER_API_KEY_</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION_BEARER_API_KEY_"
    }
  ],
  "paramsMap": {
    "body": {
      "file": "file"
    }
  },
  inputParamsSchema
}

export default tool