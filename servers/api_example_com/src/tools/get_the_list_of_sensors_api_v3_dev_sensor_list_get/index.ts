import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_the_list_of_sensors_api_v3_dev_sensor_list_get",
  "toolDescription": "[user:dev=1] Get the list of sensors",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/dev/sensor_list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "brief": "brief",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool