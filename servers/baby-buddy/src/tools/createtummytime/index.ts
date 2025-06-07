import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createtummytime",
  "toolDescription": "",
  "baseUrl": "https://bb.thejansens.uk",
  "path": "/api/tummy-times/",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "child": "child",
      "start": "start",
      "end": "end",
      "timer": "timer",
      "duration": "duration",
      "milestone": "milestone",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool