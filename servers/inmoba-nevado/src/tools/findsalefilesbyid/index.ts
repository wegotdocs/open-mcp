import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findsalefilesbyid",
  "toolDescription": "Find sale files for a sale ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/sales/{saleId}/files",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "saleId": "saleId"
    }
  },
  inputParamsSchema
}

export default tool