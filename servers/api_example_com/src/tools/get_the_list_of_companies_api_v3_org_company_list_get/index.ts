import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_companies_api_v3_org_company_list_get",
  "toolDescription": "[super administrator] Get the list of companies",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/company_list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "brief": "brief",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool