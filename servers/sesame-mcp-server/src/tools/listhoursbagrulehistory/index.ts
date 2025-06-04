import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listhoursbagrulehistory",
  "toolDescription": "List Hours Bag Rule History",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/schedule/v1/hours-bag-rule-history",
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
      "to": "to",
      "hoursBagRuleIds": "hoursBagRuleIds",
      "employeeIds": "employeeIds",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool