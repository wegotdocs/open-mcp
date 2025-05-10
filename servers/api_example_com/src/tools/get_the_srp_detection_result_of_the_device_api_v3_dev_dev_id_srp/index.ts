import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_srp_detection_result_of_the_device_api_v3_dev_dev_id_srp",
  "toolDescription": "[manager:dev=2] Get the SRP detection result of the device",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/{dev_id}/srp/{srp_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "dev_id": "dev_id",
      "srp_name": "srp_name"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool