import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_company_detail_37efacb14800d25380aed1864216d921",
  "toolDescription": "Get Company Detail",
  "baseUrl": "http://{{apiurl}}",
  "path": "/api/v1/company/detail/37efacb14800d25380aed1864216d921",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "jwt <mcp-env-var>JWT_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "JWT_CREDENTIALS"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool