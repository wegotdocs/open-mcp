import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_ota_package_api_v3_ota_ota_id_delete",
  "toolDescription": "[super administrator] Delete an OTA package",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/ota/{ota_id}",
  "method": "delete",
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