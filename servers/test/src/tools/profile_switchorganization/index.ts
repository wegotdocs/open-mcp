import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "profile_switchorganization",
  "toolDescription": "ორგანიზაციის შეცვლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/user/{language}/switch-organization",
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
      "organization_id": "organization_id",
      "object_id": "object_id"
    }
  },
  inputParamsSchema
}

export default tool