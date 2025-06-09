import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "profile_currentorganization",
  "toolDescription": "ამჟამინდელი ორგანიზაცია",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/user/{language}/current-organization",
  "method": "get",
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
    }
  },
  inputParamsSchema
}

export default tool