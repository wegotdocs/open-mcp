import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "admin_api_keys_get",
  "toolDescription": "Retrieve a single organization API key",
  "baseUrl": "https://api.openai.com/v1",
  "path": "/organization/admin_api_keys/{key_id}",
  "method": "get",
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
      "key_id": "key_id"
    }
  },
  inputParamsSchema
}

export default tool