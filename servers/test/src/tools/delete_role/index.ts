import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_role",
  "toolDescription": "წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{locale}/roles/{id}",
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
      "locale": "locale",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool