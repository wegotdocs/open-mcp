import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_a_device_api_v3_dev_dev_id_put",
  "toolDescription": "[manager:dev=2] Update a device",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/{dev_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id"
    },
    "query": {
      "rename_only": "rename_only",
      "session_id": "session_id"
    },
    "body": {
      "display_name": "display_name",
      "description": "description",
      "wol_mac": "wol_mac",
      "api_ip": "api_ip",
      "output_list": "output_list",
      "conf": "conf",
      "srps": "srps"
    }
  },
  inputParamsSchema
}

export default tool