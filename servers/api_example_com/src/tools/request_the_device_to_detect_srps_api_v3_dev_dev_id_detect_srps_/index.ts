import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "request_the_device_to_detect_srps_api_v3_dev_dev_id_detect_srps_",
  "toolDescription": "[manager:dev=2] Request the device to detect SRPs",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/{dev_id}/detect_srps",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool