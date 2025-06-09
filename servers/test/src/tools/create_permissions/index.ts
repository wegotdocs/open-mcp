import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_permissions",
  "toolDescription": "უფლების დამატება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{language}/roles/permissions",
  "method": "post",
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
      "language": "language"
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