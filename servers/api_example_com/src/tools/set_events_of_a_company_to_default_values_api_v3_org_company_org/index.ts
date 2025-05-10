import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_events_of_a_company_to_default_values_api_v3_org_company_org",
  "toolDescription": "[administrator] Set events to default values",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/company/{org_id}/set_events_to_default_values",
  "method": "post",
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