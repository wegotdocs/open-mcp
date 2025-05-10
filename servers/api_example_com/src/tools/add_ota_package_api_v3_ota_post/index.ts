import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_ota_package_api_v3_ota_post",
  "toolDescription": "[super administrator] Add an OTA package (Add first and upload later)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/ota",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "name": "name",
      "os_type_id": "os_type_id",
      "package_name": "package_name",
      "version_code": "version_code",
      "version_name": "version_name",
      "flavor": "flavor",
      "dependency_list": "dependency_list"
    }
  },
  inputParamsSchema
}

export default tool