import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_taxes_id_",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/taxes/{id}",
  "method": "put",
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
      "id": "id"
    },
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