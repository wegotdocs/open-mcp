import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getemployees",
  "toolDescription": "Retrieve employees absences, vacations and different bonus.",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/third-party-context/v1/absences-and-bonus",
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
    "query": {
      "from": "from",
      "to": "to"
    }
  },
  inputParamsSchema
}

export default tool