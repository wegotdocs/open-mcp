import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "restarttimer",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/timers/{id}/restart/",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "child": "child",
      "name": "name",
      "start": "start",
      "duration": "duration",
      "user": "user"
    }
  },
  inputParamsSchema
}

export default tool