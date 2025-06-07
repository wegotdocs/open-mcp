import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createtimer",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/timers/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
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