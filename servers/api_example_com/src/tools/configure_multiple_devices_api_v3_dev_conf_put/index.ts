import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configure_multiple_devices_api_v3_dev_conf_put",
  "toolDescription": "[manager:dev=2] Configure multiple devices",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/conf",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "dev_id_list": "dev_id_list",
      "dev_conf_in": "dev_conf_in"
    }
  },
  inputParamsSchema
}

export default tool