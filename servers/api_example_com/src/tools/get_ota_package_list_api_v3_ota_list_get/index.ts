import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ota_package_list_api_v3_ota_list_get",
  "toolDescription": "[manager:dev=2] List OTA packages",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/ota/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "os_type_id": "os_type_id",
      "package_name": "package_name",
      "version_code": "version_code",
      "version_name": "version_name",
      "flavor": "flavor",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool