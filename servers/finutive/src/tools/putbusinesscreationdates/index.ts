import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "putbusinesscreationdates",
  "toolDescription": "Update business creation dates",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/business-creation/businesses/{business_id}/dates",
  "method": "put",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "company_constitution_date": "company_constitution_date",
      "start_company_date": "start_company_date"
    }
  },
  inputParamsSchema
}

export default tool