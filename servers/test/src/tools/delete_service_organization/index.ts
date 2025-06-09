import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_service_organization",
  "toolDescription": "სერვის ორგანიზაციის წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/service-organization/{lang}/delete-service-organization/{id}",
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