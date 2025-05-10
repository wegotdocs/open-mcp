import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_to_a_company_api_v3_me_change_to_company_org_id_put",
  "toolDescription": "[super administrator] Change to a company",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/me/change_to_company/{org_id}",
  "method": "put",
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