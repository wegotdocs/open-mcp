import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "disintegration",
  "toolDescription": "პროდუქცია",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/operations/{locale}/product/list",
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
      "locale": "locale"
    },
    "query": {
      "account_number": "account_number",
      "id": "id",
      "ids": "ids",
      "search": "search",
      "basic_barcode": "basic_barcode",
      "barcode": "barcode",
      "date": "date",
      "page_size": "page_size",
      "page": "page",
      "on_sell": "on_sell",
      "on_buy": "on_buy"
    }
  },
  inputParamsSchema
}

export default tool