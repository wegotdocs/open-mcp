import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_company_api_v3_org_company_post",
  "toolDescription": "[super administrator] Add a company",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/company",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
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