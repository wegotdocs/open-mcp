import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_location_api_v3_org_location_org_id_put",
  "toolDescription": "[administrator] Update a location",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/org/location/{org_id}",
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