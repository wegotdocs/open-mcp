import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_qb_get_company_",
  "toolDescription": "Quickbooks Get All Company",
  "baseUrl": "http://localhost:8000",
  "path": "/qb/get-company/",
  "method": "get",
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
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool