import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_products_attributes_attribute_id_terms",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/products/attributes/{attribute_id}/terms",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "attribute_id": "attribute_id"
    },
    "body": {
      "name": "name",
      "slug": "slug",
      "description": "description",
      "menu_order": "menu_order"
    }
  },
  inputParamsSchema
}

export default tool