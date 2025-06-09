import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "organizations_checkorganizationbyrsuser",
  "toolDescription": "ორგანიზაციის რს-ში გადამოწმება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{language}/check-organization",
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
      "rs_user": "rs_user"
    }
  },
  inputParamsSchema
}

export default tool