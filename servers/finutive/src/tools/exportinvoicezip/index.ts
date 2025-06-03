import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exportinvoicezip",
  "toolDescription": "export invoice zip",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/{type}/export/zip",
  "method": "post",
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
      "businessId": "businessId",
      "type": "type"
    },
    "query": {
      "skip_exceptions": "skip_exceptions"
    },
    "body": {
      "ids": "ids",
      "include_individual": "include_individual",
      "zip_pdfs": "zip_pdfs"
    }
  },
  inputParamsSchema
}

export default tool