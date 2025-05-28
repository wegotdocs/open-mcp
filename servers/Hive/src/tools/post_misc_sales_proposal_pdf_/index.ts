import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_misc_sales_proposal_pdf_",
  "toolDescription": "sales proposal pdf (Quote)",
  "baseUrl": "http://localhost:8000",
  "path": "/misc/sales_proposal_pdf/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "noauth <mcp-env-var>NOAUTH_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "NOAUTH_CREDENTIALS"
    }
  ],
  "paramsMap": {
    "header": {
      "Content-Type": "Content-Type",
      "Accept": "Accept",
      "Authorization": "Authorization",
      "": ""
    }
  },
  inputParamsSchema
}

export default tool