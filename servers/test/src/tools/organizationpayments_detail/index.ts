import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "organizationpayments_detail",
  "toolDescription": "ორგანიზაციის გადახდა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{language}/payments/detail",
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
    },
    "query": {
      "from": "from",
      "to": "to"
    }
  },
  inputParamsSchema
}

export default tool