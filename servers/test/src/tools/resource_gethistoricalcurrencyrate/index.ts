import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resource_gethistoricalcurrencyrate",
  "toolDescription": "ეროვნული ბანკის კურსების ისტორია",
  "baseUrl": "http://fades-api.smthngcl.dev/api",
  "path": "/common-resources/{lang}/currency/rate/historical/{currency}/{startDate}/{endDate}",
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
      "lang": "lang",
      "currency": "currency",
      "startDate": "startDate",
      "endDate": "endDate"
    }
  },
  inputParamsSchema
}

export default tool