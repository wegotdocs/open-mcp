import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "category_deletecategory",
  "toolDescription": "კატეგორიის წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/product/categories/delete/{categoryId}",
  "method": "delete",
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
      "language": "language",
      "categoryId": "categoryId"
    }
  },
  inputParamsSchema
}

export default tool