import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "organizations_updateorganization",
  "toolDescription": "ორგანიზაციის განახლება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{language}/update",
  "method": "put",
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
      "id": "id",
      "name": "name",
      "brand_name": "brand_name",
      "address": "address",
      "telephone": "telephone",
      "email": "email",
      "start_date": "start_date",
      "type": "type",
      "vat": "vat",
      "profit": "profit",
      "income": "income"
    }
  },
  inputParamsSchema
}

export default tool