import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_permissions",
  "toolDescription": "უფლების განახლება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{locale}/roles/permissions",
  "method": "put",
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
      "locale": "locale"
    },
    "body": {
      "id": "id",
      "name": "name",
      "key": "key",
      "group_id": "group_id"
    }
  },
  inputParamsSchema
}

export default tool