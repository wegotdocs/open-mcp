import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addbreakup",
  "toolDescription": "დაშლის დამატება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/product/add-breakups",
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
      "to_account": "to_account",
      "products": "products"
    }
  },
  inputParamsSchema
}

export default tool