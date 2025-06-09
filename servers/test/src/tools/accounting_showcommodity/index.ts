import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "accounting_showcommodity",
  "toolDescription": "პროდუქტის დეტალური ინფორმაცია",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/accounting-accounts/show-commodity/{id}",
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
      "locale": "locale",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool