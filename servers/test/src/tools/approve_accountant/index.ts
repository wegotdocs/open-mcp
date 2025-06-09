import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "approve_accountant",
  "toolDescription": "აქაუნთანთზე დასტური ან უარყოფა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/user/{language}/update-accountant-status",
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
      "user_id": "user_id",
      "approved": "approved"
    }
  },
  inputParamsSchema
}

export default tool