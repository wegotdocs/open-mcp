import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "functions_list_triggers",
  "toolDescription": "List Triggers",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/functions/namespaces/{namespace_id}/triggers",
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
      "namespace_id": "namespace_id"
    }
  },
  inputParamsSchema
}

export default tool