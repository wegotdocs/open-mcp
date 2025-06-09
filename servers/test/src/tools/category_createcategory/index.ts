import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "category_createcategory",
  "toolDescription": "კატეგორიის დამატება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/product/categories/create",
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
      "locale": "locale"
    },
    "body": {
      "category_name": "category_name"
    }
  },
  inputParamsSchema
}

export default tool