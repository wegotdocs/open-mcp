import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_business_nib",
  "toolDescription": "Search By NIB",
  "baseUrl": "http://{{apiurl}}",
  "path": "/api/v1/business/nib",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "jwt <mcp-env-var>JWT_CREDENTIALS</mcp-env-var>",
      "in": "header",
      "envVarName": "JWT_CREDENTIALS"
    }
  ],
  "paramsMap": {
    "query": {
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool