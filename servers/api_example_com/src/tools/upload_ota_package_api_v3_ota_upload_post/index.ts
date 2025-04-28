import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "upload_ota_package_api_v3_ota_upload_post",
  "toolDescription": "[super administrator] Upload an OTA package (Upload first and add later)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/ota/upload",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool