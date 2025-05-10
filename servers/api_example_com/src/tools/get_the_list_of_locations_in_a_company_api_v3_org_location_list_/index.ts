import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_locations_in_a_company_api_v3_org_location_list_",
  "toolDescription": "[administrator] Get the list of locations in a company",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/location_list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "root_org_id": "root_org_id",
      "brief": "brief",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool