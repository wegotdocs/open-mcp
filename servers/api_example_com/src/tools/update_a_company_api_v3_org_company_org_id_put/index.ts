import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_company_api_v3_org_company_org_id_put",
  "toolDescription": "[super administrator] Update a company",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/company/{org_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "time_offset": "time_offset"
    }
  },
  inputParamsSchema
}

export default tool