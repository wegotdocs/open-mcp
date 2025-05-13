import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcustomer",
  "toolDescription": "This API helps you to create a new customer.",
  "baseUrl": "https://example-woocommerce-shop.com/wp-json/wc/v3",
  "path": "/customers",
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
    "body": {
      "id": "id",
      "date_created": "date_created",
      "date_created_gmt": "date_created_gmt",
      "date_modified": "date_modified",
      "date_modified_gmt": "date_modified_gmt",
      "email": "email",
      "first_name": "first_name",
      "last_name": "last_name",
      "role": "role",
      "username": "username",
      "password": "password",
      "billing": "billing",
      "shipping": "shipping",
      "is_paying_customer": "is_paying_customer",
      "avatar_url": "avatar_url",
      "meta_data": "meta_data"
    }
  },
  inputParamsSchema
}

export default tool