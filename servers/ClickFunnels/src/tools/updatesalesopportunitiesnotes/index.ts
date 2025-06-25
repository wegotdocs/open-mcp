import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatesalesopportunitiesnotes",
  "toolDescription": "Update Note",
  "baseUrl": "https://{subdomain}.myclickfunnels.com/api/v2",
  "path": "/sales/opportunities/notes/{id}",
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
      "sales_opportunities_note": "sales_opportunities_note"
    }
  },
  inputParamsSchema
}

export default tool