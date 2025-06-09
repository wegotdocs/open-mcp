import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "language_delete",
  "toolDescription": "ენის წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{lang}/languages/delete/{id}",
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
      "lang": "lang",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool