import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_a_sensor_api_v3_dev_sensor_post",
  "toolDescription": "[user:dev=2] Add a sensor",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/sensor",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "display_name": "display_name",
      "org_id": "org_id",
      "output_list": "output_list"
    }
  },
  inputParamsSchema
}

export default tool