import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_taxes",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/taxes",
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
      "country": "country",
      "state": "state",
      "postcode": "postcode",
      "city": "city",
      "rate": "rate",
      "name": "name",
      "priority": "priority",
      "compound": "compound",
      "shipping": "shipping",
      "order": "order",
      "class": "class",
      "postcodes": "postcodes",
      "cities": "cities"
    }
  },
  inputParamsSchema
}

export default tool