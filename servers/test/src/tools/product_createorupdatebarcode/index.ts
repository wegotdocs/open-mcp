import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "product_createorupdatebarcode",
  "toolDescription": "ბარკოდის განახლება ან წაშლა",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{language}/product/barcodes/add",
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