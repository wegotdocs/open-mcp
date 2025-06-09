import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "organizations_createorganization",
  "toolDescription": "ორგანიზაციის დამატება",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/organization/{language}/create",
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
    },
    "body": {
      "rs_user": "rs_user",
      "rs_pass": "rs_pass",
      "identification": "identification",
      "name": "name",
      "brand_name": "brand_name",
      "address": "address",
      "telephone": "telephone",
      "email": "email",
      "start_date": "start_date",
      "vat": "vat",
      "profit": "profit",
      "income": "income",
      "ignorable": "ignorable"
    }
  },
  inputParamsSchema
}

export default tool