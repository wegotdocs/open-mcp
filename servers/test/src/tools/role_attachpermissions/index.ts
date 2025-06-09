import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "role_attachpermissions",
  "toolDescription": "უფლებების მინიჭება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{language}/roles/attach-permissions",
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
      "role_id": "role_id",
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool