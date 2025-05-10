import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_ota_package_by_ota_id_api_v3_ota_ota_id_upload_post",
  "toolDescription": "[super administrator] Upload an OTA package by OTA ID (Add first and upload later)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/ota/{ota_id}/upload",
  "method": "post",
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