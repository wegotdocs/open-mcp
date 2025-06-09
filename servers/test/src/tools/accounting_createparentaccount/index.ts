import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accounting_createparentaccount",
  "toolDescription": "მშობელი აქაუნთის შექმნა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/accounting-accounts/save-parent",
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
    }
  },
  inputParamsSchema
}

export default tool