import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "serviceusers_removefromemployee",
  "toolDescription": "სერვის მომხმარებლის წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{locale}/service-users/remove-role/{id}",
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