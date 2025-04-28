import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_ota_package_attributes_api_v3_ota_ota_id_put",
  "toolDescription": "[super administrator] Update the attributes of an OTA package (Upload first and add later)",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/ota/{ota_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "ota_id": "ota_id"
    },
    "query": {
      "session_id": "session_id"
    },
    "body": {
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