import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_location2_api_v3_org_company_org_id_location_post",
  "toolDescription": "[administrator] Add a location",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/company/{org_id}/location",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org_id": "org_id"
    },
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "display_name": "display_name",
      "description": "description",
      "root_org_id": "root_org_id",
      "time_offset": "time_offset",
      "longitude": "longitude",
      "latitude": "latitude",
      "postal_address": "postal_address",
      "weather_address": "weather_address"
    }
  },
  inputParamsSchema
}

export default tool