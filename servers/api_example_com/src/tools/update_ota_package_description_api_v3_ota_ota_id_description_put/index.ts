import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_ota_package_description_api_v3_ota_ota_id_description_put",
  "toolDescription": "[super administrator] Update the description of a OTA package",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/ota/{ota_id}/description",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "ota_id": "ota_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool