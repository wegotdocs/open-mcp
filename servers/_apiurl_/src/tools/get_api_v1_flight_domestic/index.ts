import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_api_v1_flight_domestic",
  "toolDescription": "Search Domestic",
  "baseUrl": "http://{{apiurl}}",
  "path": "/api/v1/flight/domestic",
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
      "category": "category",
      "limit": "limit",
      "flight_date": "flight_date"
    }
  },
  inputParamsSchema
}

export default tool