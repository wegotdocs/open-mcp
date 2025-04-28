import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_a_company_api_v3_org_company_org_id_get",
  "toolDescription": "[user] Get a company",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/company/{org_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool