import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesalesopportunities",
  "toolDescription": "Update Opportunity",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/sales/opportunities/{id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "sales_opportunity": "sales_opportunity"
    }
  },
  inputParamsSchema
}

export default tool