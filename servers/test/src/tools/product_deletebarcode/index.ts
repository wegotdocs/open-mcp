import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "product_deletebarcode",
  "toolDescription": "ბარკოდის წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/product/barcodes/delete/{id}",
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
      "locale": "locale",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool